const express = require("express");
const axios = require('axios');
const paystack = require("../Config/constant");

const initializePayment = async (amount, email) => {
  try {
    const paystackApiKey = process.env.PAYSTACK_SANDBOX_SECRETKEY; // Replace with your Paystack API key
    const baseUrl = `${paystack.PAYSTACK_BASE_URL}initialize`;
    const response = await axios.post(baseUrl, {
      amount: amount*100,
      email: email,
      callback_url:'https://localhost:8000'
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${paystackApiKey}`
      }
    });

    const data = response.data;

    return data;
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

const verifyPayment = async(reference) => {
  try {
    const paystackApiKey = process.env.PAYSTACK_SANDBOX_SECRETKEY; // Replace with your Paystack API key
    const baseUrl = `${paystack.PAYSTACK_BASE_URL}verify/${reference}`;
    const headers = {
      Authorization: `Bearer ${paystackApiKey}`,
    };
   
    const response = await axios.get(baseUrl, { headers });

    const data = response.data;

    return data;
    
  } catch (error) {
    console.error(error);
   return error;
  }
}



module.exports = {initializePayment, verifyPayment}
