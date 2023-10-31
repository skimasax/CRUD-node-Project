const express = require("express");
const paystack = require("../Service/PaystackService");

const makePayment = async(req, res) =>{
    const {amount, email} = req.body;

    //send the data to paystack
    const data = await  paystack.initializePayment(amount,email);
       return res.status(200).json({
            'status':true,
            'data':data
        });
}

module.exports = {makePayment}