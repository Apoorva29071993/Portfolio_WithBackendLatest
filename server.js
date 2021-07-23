const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const sgMail = require("@sendgrid/mail");


if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const sendGridApikey=process.env.SENDGRID_API_KEY;

console.log("Stripe key = " + sendGridApikey);

//sgMail.setApiKey(sendGridApikey);


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

    // sgMail.send({
    //   to : body.email ,
    //   from : "apoorva.jakati@gmail.com" , 
    //   subject : "Will get back to u soon" ,
    //   text : "Thank you"
    // });

    (async () => {
      try {
        await sgMail.send({
          to : body.email ,
          from : "apoorva.jakati@gmail.com" , 
          subject : "Reply from Mr.Apoorva A. Jakati" ,
          text : `Thank you ${body.name} for Contacting me . Will get back to u soon.`
        });

        await sgMail.send({
          to : "apoorva.jakati@gmail.com" ,
          from : "apoorva.jakati@gmail.com" , 
          subject : "Client Contacting From My Portfolio Website" ,
          text : `Name : ${body.name}  
                  Phone No. : ${body.phone}
                  Email : ${body.email} 
                  Message : ${body.message}`
        });

        res.status(200).send();
        console.log("Mail Received successfully ");
      } catch (error) {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)  ;
          res.status(500).send();
          console.log("There was error in receiving mail .");
        }
      }
    })()
 
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

