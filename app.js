const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module
const app = express();
const registrationController = require('./controllers/registrationController');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// convert form data to JavaScript object and put into request body
app.use(express.urlencoded({ extended: false }));

// convert JSON to JavaScript object and put into request body
app.use(express.json());

const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Route to handle form submission
app.post('/register', (req, res) => {
    // Log the received data
    console.log('Received data:', req.body);

    // Send confirmation response
    res.status(200).json(req.body);
});



// Serve static files directly from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
