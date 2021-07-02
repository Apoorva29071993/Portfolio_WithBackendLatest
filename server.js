const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("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");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static(path.resolve(__dirname , '../client/build')))

app.post('/api', (req , res) => {
    const body = {
      name : req.body.name ,
      email : req.body.email ,
      phone : req.body.phone,
      message : req.body.message
    }
    console.log("Name : " + body.name);
    console.log("Email : " + body.email);
    console.log("Phone :" + body.phone);
    console.log("Message " + body.message);

    res.status(200).send();
 });

 app.get('/downloadCV', (req , res) => {
  console.log("Request name : Download CV ");
  let filepath = path.join(__dirname , "Resume.pdf");
  // console.log("Filepath " + filepath);
  // res.status(200).download(filepath);

  var data =fs.readFileSync(filepath);
  res.contentType("application/pdf");
  res.status(200).send(data);
  console.log("Download CV End");
});

app.get("*" , (req , res) => {
  res.sendFile(path.resolve(__dirname , '../client/build' , 'index.html'));
})

