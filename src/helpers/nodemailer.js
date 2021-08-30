const nodemailer = require('nodemailer');

async function mail(mail, subjet, html) {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'blaze.mccullough70@ethereal.email',
            pass: 'mhb7HJm8pBB8qxgdKc' 
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: 'blaze.mccullough70@ethereal.email',
        to: await mail || "blaze.mccullough70@ethereal.email",
        subject: await subjet,
        html: await html,
    });

    console.log(info);
}

module.exports = mail