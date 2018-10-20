// Get dependencies
const express = require('express')
const http = require('http')
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

app.use('/api', api)

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port
    console.log('App now running on port', port)
})