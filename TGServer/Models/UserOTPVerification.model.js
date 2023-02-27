const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserOTPVerificationSchema = new Schema({
    userId: String,
    otp: String,
    createdAt: Date,
    expiresAt: Date
})

const userOTPVerification = mongoose.model("UserOTPVerification",UserOTPVerificationSchema)
module.exports = userOTPVerification