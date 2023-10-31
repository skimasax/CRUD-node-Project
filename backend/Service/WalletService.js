const express = require("express");
const wallet = require("../Model/WalletModel");


const createWalletOnRegistration = async (id) => {
    try {
        const newWallet = await wallet.create({
            user_id: id // Corrected the object structure
        });

        const userWallet = await wallet.findOne({user_id : id});
        return userWallet;
    } catch (error) {
        console.log(error);
        throw new Error('Error creating wallet: ' + error.message);
    }
};


const getUserWallet = async(userId)=>{
    try {
        const userWallet = await wallet.findOne({user_id : userId});
        if(!userWallet){
            return ('wallet not found');
        }

        return userWallet;

    } catch (error) {
        console.log(error);
        throw new Error('Error getting wallet: ' + error.message);
    }
}

module.exports = { createWalletOnRegistration, getUserWallet };
