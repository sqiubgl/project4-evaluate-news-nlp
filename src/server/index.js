const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

// Empty JS as end point for all routes. Do I need this????
projectData = {};

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialise the dist folder
app.use(express.static("dist"));
console.log(__dirname);

// Get route
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

// Post route
app.post("/api", async (req, res) => {
  const { formText } = req.body;
  console.log(formText);

  try {
    console.log("Sending request");
    textapi.sentiment({ text: formText }, function (error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// app.get("/test", function (req, res) {
//   res.send(mockAPIResponse);
// });

// console.log(`Your API key is ${process.env.API_KEY}`);
