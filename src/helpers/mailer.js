var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rishichaary2007@gmail.com',
    pass: process.env.GMAIL_TOKEN
  }
});

const mail = (to,subject,body) =>{
    return new Promise((resolve, reject) => {
        var mailOptions = {
            from: 'rishichaary2007@gmail.com',
            to: to,
            subject: subject,
            text: body
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                resolve(false);
            } else {
              console.log('Email sent: ' + info.response);
              resolve(true);
            }
          });
    })
};

module.exports = {
    mail
}