const {
    mongoConnection
} = require('../driver/mongo/connection');
const mongoose = require('mongoose');


const Detail = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    p: {
        type: String,
        required: [true, 'p is required!']
    },
    h: {
        type: String,
        required: [true, 'h is required!']
    },
    l: {
        type: String,
        required: [true, 'l is required!']
    },
    d: {
        type: String,
        required: [true, 'd is required!']
    },
    dp: {
        type: Number,
        required: [true, 'dp is required!']
    },
    dt: {
        type: String,
        required: [true, 'dt is required!']
    },
    t: {
        type: String,
        required: [true, 't is required!']
    },
    ts: {
        type: String,
        required: [true, 'ts is required!']
    },

}, {
    timestamps: true,
    versionKey: false
})


const detailModel = mongoConnection.model('Detail', Detail);

module.exports = detailModel