const nodemailer = require('nodemailer')
require('dotenv').config({ path: './sendgrid.env' })

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
})

transporter.sendMail(
  {
    from: process.env.MAIL_FROM, // verified sender email
    to: process.env.MAIL_TO, // recipient email
    subject: 'Test message subject', // Subject line
    text: 'Hello world!', // plain text body
    html: '<b>Hello world!</b>', // html body
  },
  function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  }
)
