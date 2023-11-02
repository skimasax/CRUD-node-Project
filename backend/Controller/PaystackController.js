const express = require("express");
const paystack = require("../Service/PaystackService");

const makePayment = async(req, res) =>{
    const {amount, email} = req.body;

    //send the data to paystack
    const data = await  paystack.initializePayment(amount,email);
    
       return res.status(200).json({
            'status':true,
            'data':data.data.authorization_url
        });
}

const verifyPayment = async(req, res) => {
    const {reference} = req.body;
    const data = await paystack.verifyPayment(reference);
        
    if(data.data.status == 'success')
    {
        return res.status(200).json({
            'status':true,
            'data':data
        });
        
    }else{
        return res.status(422).json({
            'status':false,
            'data':'Payment failed'
        });
    }
   
}

module.exports = {makePayment,verifyPayment}