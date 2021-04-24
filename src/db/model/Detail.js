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
    },
    dp: {
        type: Number,
    },
    dt: {
        type: String,
    },
    t: {
        type: String,
    },
    ts: {
        type: String,
    },

}, {
    timestamps: true,
    versionKey: false
})


const detailModel = mongoConnection.model('Detail', Detail);

module.exports = detailModel