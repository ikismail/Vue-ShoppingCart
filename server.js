// Get dependencies
const express = require('express')
const bodyParser = require('body-parser')

// Get our API routes
const api = require('./server/routes/api')

const app = express()

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Create link to Angular build directory
// var distDir = __dirname + "/dist";
// app.use(express.static(distDir));

/* Access Control Allow Origin */
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})

app.use('/api', api)

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port
    console.log('App now running on port', port)
})