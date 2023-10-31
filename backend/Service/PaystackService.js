const express = require("express");
const request = require('request');
const paystack = require("../Config/constant");

const initializePayment = async (amount, email) => {
  try {
    const options = {
      method: 'POST',
      url: paystack.PAYSTACK_BASE_URL+'/initialize',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.PAYSTACK_SANDBOX_SECRETKEY,
      },
      body: JSON.stringify({
        amount: amount, // Use the amount parameter passed to the function
        email: email,   // Use the email parameter passed to the function
      }),
    };

    request(options, function (error, response, body) {
      if (error) {
        console.error('Error:', error);
        // Handle the error appropriately, e.g., return an error response
      } else {
        const result = JSON.parse(body);
        // Handle the result, e.g., return the result to the client
        return result;
      }
    });
  } catch (error) {
    console.error('Error:', error);
    // Handle any errors that may occur during the request
  }
};



module.exports = {initializePayment}
