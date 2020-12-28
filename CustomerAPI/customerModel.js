const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender:String,
    address:String,
    country:String,
    city:String,
    zipcode:Number,
    phoneNumber:Number
});


const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;