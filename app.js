// app.js

const express = require('express');
const bodyParser = require('body-parser');
const registrationController = require('./controllers/registrationController');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/register', registrationController.processRegistration);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
