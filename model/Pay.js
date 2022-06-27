const mongoose = require('mongoose');

const paySchema = new mongoose.Schema({
    CardNumber: {
        required: true,
        type: String
    },
    ExpDate: {
        type: String,
        required: true
    },
    Cvv: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const Pay = mongoose.model('Pay', paySchema);
module.exports = Pay;