const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mailer = require('express-mailer');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


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
 
    res.status(200).send();
    console.log("Backend successfull");
 });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});