const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

const User = require("../Models/User.model");
const UserOTPVerification = require("../Models/UserOTPVerification.model");

const sendEmail = require("../functions/sendMail");

// const {generateAccessToken, generateRefreshToken, verify} = require('../JWT/jwt')
// const jwt = require('jsonwebtoken');

// /api/v1/auth/

// REGISTER USER ROUTE ---------------------------------------------------------------------------------------------------------------------
router.post("/register", async (req, res) => {
  const plainTextPassword = req.body.password;

  try {
    //generating salt
    const salt = await bcrypt.genSalt(10);
    const encryptPassword = await bcrypt.hash(plainTextPassword, salt);

    //saving user in the data base
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: encryptPassword,
      organisation: req.body.organisation,
      userType: req.body.userType,
      aadharNumber: req.body.aadharNumber,
      publicAddress: req.body.publicAddress,
      signature: req.body.signature
    });

    //MARK: SENDING MAIL TO USER
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    const Subject = "One Time Password";
    const Body = `Please use this as your OTP ${val}`;

    let mailResponse = await sendEmail(req.body.email, Subject, Body);
    // let mailResponse = true
    //MARK: CREATING NEW INSTANCE OF OTP VERIFICATION
    const otpVerification = await UserOTPVerification.create({
      userId: user._id,
      otp: `${val}`,
    });

    if (mailResponse) {
      res.status(200).json({
        ...user._doc,
        status: "successful",
        message: "user created successfully and mailed verified",
      });
      return;
    }

    res.status(200).json({
      user,
      status: "successful",
      message: "user created successfully but mailed not verified",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "error",
      message: "user not created",
    });
  }
});

// LOGIN USER ROUTE ---------------------------------------------------------------------------------------------------------------------
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (user) {
      const matchPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (matchPassword) {
        // const accessToken = generateAccessToken(user);
        // const refreshToken = generateRefreshToken(user);
        const newUser = { ...user._doc };
        // await user.updateOne({
        //   refreshToken,
        // })
        res.status(200).json({
          status: "successfull",
          ...newUser,
        });
      } else {
        res.status(403).json({
          status: "error",
          message: "password is incorrect",
        });
      }
    } else {
      res.status(404).json({
        status: "error",
        message: "email is incorrect",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      error: "Internal Server Error",
    });
  }
});

// LOGOUT USER ROUTE ---------------------------------------------------------------------------------------------------------------------
router.get("/logout", async (req, res) => {
  const id = req.user.id;
  try {
    const user = await User.findById(id);
    // await user.updateOne({
    //   refreshToken: ""
    // })
    //send blank user to front-end
    res.status(200).json({});
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: "Can't able to log out",
    });
  }
});

// REFRESH USER TOKEN ---------------------------------------------------------------------------------------------------------------------
router.post("/refresh", async (req, res) => {
  //take refresh token from user through body
  const refreshToken = req.body.token;

  //sent error no token || token not valid
  if (!refreshToken) {
    return res.status(401).json({
      status: "error",
      message: "you are not authenticated",
    });
  }
  try {
    const userDB = await User.findOne({ refreshToken });
    if (!userDB) {
      return res.status(403).json({
        status: "error",
        message: "refresh token not valid",
      });
    } else {
      jwt.verify(refreshToken, "refreshSecrectkey", async (err, user) => {
        if (err) {
          res.status(500).json({
            status: "error",
            message: "refresh token not valid",
          });
        }
        //generating new access token
        const newAccessToken = generateAccessToken(userDB);
        const newRefreshToken = generateRefreshToken(userDB);

        //updating the refresh token of the user
        await userDB.updateOne({
          refreshToken: newRefreshToken,
        });

        //sending new access token and refresh token
        const newUser = {
          ...userDB._doc,
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        };
        res.status(200).json(newUser);
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

router.post("/emailVerification", async (req, res) => {
  let userId = req.body.id;
  let otp = req.body.otp;

  try {
    const userOtp = await UserOTPVerification.find({
      userId,
    });

    if (otp == userOtp[0].otp) {
      await User.findByIdAndUpdate(userId, { $set: { verified: true } });

      await UserOTPVerification.findByIdAndDelete(userOtp[0]._id);

      res.status(200).json({
        // otp: userOtp[0].otp,
        // userOtp: userOtp[0]._id,
        // status: userOtp[0]._id
        message: "email Verified",
      });

      return;
    }
    res.status(400).json({
      message: "error not verified",
    });
  } catch (error) {}
});

router.post("/transaction", async (req, res) => {
  const id = req.body.id;
  const transaction = req.body.transaction;

  try {
    const dbRes = await User.findByIdAndUpdate({ _id: id }, { $push: { transaction : transaction } });

    const Buyer = await User.findById(id)
    console.log("Buyer",Buyer)

    let buyerName = `${Buyer.firstName} ${Buyer.lastName}`
    let organisation = `${Buyer.organisation}`
    let date = new Date();

    let mailId = "sg2903@srmist.edu.in"
    let Subject = "No-Reply : NFT Sold"
    let Body = `Hi Subham 
    ${buyerName} from ${organisation} has bought your data `

    let mailResponse = await sendEmail(mailId, Subject, Body);

    res.status(200).json({
      message : "success"
    })

  } catch (error) {
    res.json(error)
  }
});


router.post("/referMail", async(req, res)=>{

  let name = req.body.name
  let email = req.body.email
  let link = req.body.link

  try {

    let body = `Hi, ${name}, Please use the Link Provided to access the NFT 
    ${link}
    `

    let mailResponse = sendEmail(email,`You Recieved NFT from MedSecure`,body)
    if (mailResponse) {
        res.status(200).json({
          message : "success"
        })
    }
    
  } catch (error) {
    res.status(200).json({
      error : error.message
    })
  }
})



module.exports = router;
