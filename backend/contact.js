require('dotenv').config();
const express = require("express");
const contactRoutes = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);

const PORT = process.env.CONTACT_PORT || 3002;

app.listen(PORT, () => console.log("contact server running"));


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASSWORD_GMAIL,
    },
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
   //     console.log("Ready to Send");
    }
});

contactRoutes.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.SEND_EMAIL_TO,
        subject: "Enviado desde el sitio web",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    };
    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message sent" });
        }
    });
});
