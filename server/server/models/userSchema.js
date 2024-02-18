const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique : true
  },
  address : {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  type:{
    type:String,
    required:true,
    enum:['admin','customer']
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;