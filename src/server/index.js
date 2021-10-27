const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

const axios = require("axios");

const cors = require("cors");

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

app.use(cors());

console.log(__dirname)

app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
  });

app.get('/runAnalysis/*', async (req, res) => {
    let application_key = process.env.API_KEY;
    let apiURL = "https://api.meaningcloud.com/sentiment-2.1";
    try{
        console.log(`${apiURL}?key=${application_key}&url=${req.params[0]}&lang=en`)
        const response = await axios.get(`${apiURL}?key=${application_key}&url=${req.params[0]}&lang=en`);
        res.send(response.data);
    }catch(error){
        console.log(error)
        res.send(error);
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
