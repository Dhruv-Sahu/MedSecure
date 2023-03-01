const mongoose = require("mongoose");

const TempMedicalStorageSchema = new mongoose.Schema(
  {
    currentBid: {
      type: String,
    //   required: true
    },

    expiredOn: {
      type: String,
    //   required: true
    },

    gender: {
      type: String,
    //   required: true
    },

    hospitalName: {
      type: String,
    //   required: true
    },

    imgUrl: {
      type: String,
    },

    lastUpdate: {
        type: String,
        // required: true
    },

    numberOfMedicalIssue: {
        type: String,
        // required: true
    },

    patientUid: {
        type: String,
        // required: true
    },
    reports: {
      type: [],
    },
    sellerWalletAddress: {
        type: String,
        default:""
    },
    aadharNumber:{
        type: String,
        default: "nil",
        unique: true
      }

  },
  {
    timestamps: true,
  }
);

const TempMedicalStorageModal = mongoose.model("TempMedicalStorage", TempMedicalStorageSchema);
module.exports = TempMedicalStorageModal;