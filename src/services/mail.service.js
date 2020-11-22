const nodemailer = require("nodemailer");

function sendMail(email, name, text) {

    let html = 
    `
        <p>${text}</p>
        <br/>
        <em>${name}</em>
        <br/>
        <a href="mailto:${email}?Subject=Respuesta%20Decoraciones%20Alybell">Responder</a>
    `

    let transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        secure: false, 
        auth: {
            user: 'ef35f57202f75adb585adb3b95a0725b',
            pass: '299cbe5f1af4a21a553abb01a283575e',
        }
    });

    var mailOptions = {
        from: '"Decoraciones Alybell" <cristianv129@hotmail.com>',
        to: 'cristianv129@gmail.com',
        subject: 'Consulta de ' + name,
        html: html
    };

    return transporter.sendMail(mailOptions);
}

let methods = {
    sendMail
};

export default methods;