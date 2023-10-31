const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    wallet_credit: {
        type: Number,
        required: true,
        default: 0,
    },
    wallet_debit: {
        type: Number,
        required: true,
        default: 0,
    },
    wallet_balance: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Wallet', walletSchema);
