var express = require('express');
var router = express.Router();
const { body,validationResult } = require('express-validator');
const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../src/config/smtp");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', [
  body('name','Your name must be specified.').trim().isLength({ min: 1, max: 200}).escape(),
  body('email').trim().isLength({ min: 1, max: 200}).escape().withMessage('Your email must be specified')
    .isEmail().normalizeEmail().withMessage('You should submit a valid email'),
  body('message', 'Your mesage must be present').trim().isLength({ min: 1}).escape(),


  (req, res, next) => {
    const errors = validationResult(req);

    const transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: false,
      auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const data = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }

    if(!errors.isEmpty()) {
      console.log(errors);
      res.render('index', { title: 'Portfólio Z', errors: errors.array() });
      return;
    }

    async function sendEmail() {
      const mailsent = await transporter.sendMail({
        text: `${data.name} <${data.email}> Sent you this message:\n ${data.message}`,
        subject: 'Portfolio visitor contact message',
        from: `${data.name} <lucaszam0@gmail.com`,
        to: ['lucaszam0@gmail.com']
      });
      console.log(mailsent);
    }
    sendEmail();
    res.redirect('/')
  }
])

module.exports = router;
