const express = require("express");
const axios = require('axios');
const paystack = require("../Config/constant");

const initializePayment = async (amount, email) => {
  try {
    const paystackApiKey = process.env.PAYSTACK_SANDBOX_SECRETKEY; // Replace with your Paystack API key
    const baseUrl = `${paystack.PAYSTACK_BASE_URL}initialize`;
    const response = await axios.post(baseUrl, {
      amount: amount,
      email: email
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



module.exports = {initializePayment}
