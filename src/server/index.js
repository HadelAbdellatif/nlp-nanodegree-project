// Setup empty JS object to act as endpoint for all routes
let projectData = {};

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

/* Start up an instance of app */
const app = express();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Configure express to use body-parser as middle-ware. */
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'))

// // Setup Server and API key
const apiKey = process.env.API_KEY;
const port = 8000;
const server = app.listen(port, listening);
let URL = "";

console.log(__dirname);
console.log(`Your API key is ${process.env.API_KEY}`);

// Initialize all route with a callback function
// Get Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// POST Route
// 1. Get the URL from formHandler.js
app.post('/postURL', function (req, res) {
    URL = req.body.URL;
    //fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${URL}`)
    fetch("https://ek8v6.wiremockapi.cloud/api")

    .then(response => {
        // Check if the response is valid
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();  
    })
    .then(data => {
        //console.log('Full API Response:', data);

        // Assign relevant data to projectData
            projectData.score_tag = data.sentence_list[0].score_tag ? data.sentence_list[0].score_tag : "N/A";
            projectData.agreement = data.sentence_list[0].agreement ? data.sentence_list[0].agreement : "N/A";
            projectData.text = data.sentence_list[0].text ? data.sentence_list[0].text : "There are no text";
            
            //console.log(`Data: ${projectData.score_tag} -- ${projectData.agreement} -- ${projectData.text}`);

        // Send the projectData back to the client
        res.send(projectData);
    })
    .catch(error => {
        // Handle any errors and send an error message back to the client
        res.status(500).json({ error: error.message });
    });

});


// Designates what port the app will listen to for incoming requests
function listening() {
    console.log(`running on localhost: ${port}`);
};


