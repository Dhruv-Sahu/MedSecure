const express = require("express");
const router = express.Router();

const TempMedicalStorageModal = require("../Models/TempStorage.model");
const User = require("../Models/User.model")

const sendEmail = require("../functions/sendMail");

router.post("/tempUpload", async (req, res) => {
  console.log("hit");
  try {
    let response = await TempMedicalStorageModal.create({ ...req.body  });
    console.log(response.aadharNumber);

    let userRes = await User.findOne({
        aadharNumber: response.aadharNumber
    })
    console.log(userRes)

    const Subject = "Your Medical Data Uploaded";
    const Body = `The ${response.hospitalName} has uploaded the report.
    Please Login to our portal and verify it to upload it to the market.

    Thank You

    It is an auto generating mail, Please do not reply back.
    `;

    let mailResponse = await sendEmail(userRes.email, Subject, Body);

    res.status(200).json({
      message: "Data Saved",
    });
  } catch (error) {
    res.json(error);
  }
});




router.get("/tempData", async (req, res) => {
  let aadharNumber = req.query.aadharNumber;
  console.log(aadharNumber);

  try {
    let response = await TempMedicalStorageModal.find({
      aadharNumber: aadharNumber,
    });
    console.log(response)
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
