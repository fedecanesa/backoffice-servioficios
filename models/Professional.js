const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
    name: String,
    hourPrice: Number,
    job: String,
    currency: String,
    rating: Number,
    description: String,
    zone: String,
    imgUrl: String,
    status: Boolean,
    dni: Number,
    email: String,
    phone: Number,
    seniority: Number
})

module.exports = mongoose.model("Professional", professionalSchema);