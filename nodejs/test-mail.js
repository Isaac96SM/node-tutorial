//See https://nodemailer.com for more info
const nodemailer = require('nodemailer');

//You can specify a service like gmail or outlook. Or use a custom mail host+port
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'origin@gmail.com',
        pass: '*****'
    }
});

//You can send html property instead of text property
const mailOptions = {
    from: 'origin@gmail.com',
    to: 'destination@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});