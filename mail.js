var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 587,
  auth: {
    user: 'narmadhapalanivelu@gmail.com',
    pass: 'uisq syaq ehag dkni'
  }
});

var mailOptions = {
  from: 'narmadhapalanivelu@gmail.com',
  to: 'lawrencebritto007@gmailcom',
  subject: "Hello from Narmadha",
  text:`This is a test email sent using Nodemailer`
};

const send = (mailOptions)=>{transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

send(mailOptions)