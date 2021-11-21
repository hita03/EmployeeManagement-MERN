const mongoose=require('mongoose');

var emp_schema =new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    
    gender: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    leave:{
        type: String,
        required: true

    }
})

const Employee = mongoose.model('employee',emp_schema);
module.exports = Employee;

