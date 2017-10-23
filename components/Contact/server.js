// server.js
var express    = require('express');
var app	    = express();
var nodemailer = require('nodemailer');

app.use(express.static('app'));

// nodemailer
var smtpTransport = nodemailer.createTransport('SMTP', {
  service: "Gmail",
  auth: {
    user: 'concatcontact@gmail.com',
    pass: 'DuMmYEmAiL101!'
  }
});

var mailOptions = {
  from: 'Fred Foo <foo@blurdybloop.com>', // Sender Address
  to: 'user@gmail.com',
  subject: 'Contact Request', // Subject Line
  text: 'Hello World!', // Plaintext Body
  html: '<b>Hello Word! </b>' // HTML Body
}

smtpTransport.sendMail(mailOptions, function (error, response) {
  if (error) {
    console.log(error);
  } else{
    console.log('Message sent: ' + response.message);
  }
});

var server = app.listen(8080, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});