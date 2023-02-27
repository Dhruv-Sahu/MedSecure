const nodemailer = require("nodemailer")

function sendEmail(to, subject, text){
    return new Promise((resolve, reject)=>{
      var transporter =  nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "diptanshumandal1@gmail.com",
          pass: "xktpaytdtudstucw"
        }
      })
      const mail_configs = {
        from: "diptanshumandal1@gmail.com",
        to: to,
        subject: subject,
        text: text
      }
      transporter.sendMail(mail_configs, function(error, info){
  
        if(error){
          return reject({
            message: `An error occured ${error}`
          })
        }
        return resolve({
          message: "Email send Successfully"
        })
      })
    })
  }

  module.exports = sendEmail;