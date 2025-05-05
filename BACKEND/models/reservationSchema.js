import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"First name must contain at least 3 characters"],
        maxlength: [10,"First name cannot exceed 30 characters"],
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"Last name must contain at least 3 characters"],
        maxlength:[30,"Last name cannot exceed 30 characters"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minlength:[10,"Must be of 10 numbers"],
        maxlength:[10,"Must be of 10 numbers"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});

export const Reservation = mongoose.model('Reservation',reservationSchema);