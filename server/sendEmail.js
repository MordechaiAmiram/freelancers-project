const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 587,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
})
const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error.message);
    } else {
        console.log('Email sent: ' + info.response);
    }
});