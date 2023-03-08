const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      max: 20,
    },

    lastName: {
      type: String,
      required: true,
      max: 20,
    },

    email: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    userType: {
        type: String
    },

    organisation: {
        type: String
    },

    transaction: {
        type: Array,
        default: []
    },
    verified: {
      type: Boolean,
      default: false
    },

    aadharNumber:{
      type: String,
    },
    
    publicAddress:{
      type: String,
    },

    signature:{
      type: String
    }

  },
  {
    timestamps: true,
  }
);

const UserModal = mongoose.model("User", UserSchema);
module.exports = UserModal;