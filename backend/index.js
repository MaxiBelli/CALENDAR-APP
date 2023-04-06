const express = require('express');
require('dotenv').config();

// Create the express server
const app = express();

// Public directory
app.use(express.static('public'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Read and parse the body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listen to requests
app.listen(process.env.PORT, () => {
console.log(`Server running on port ${process.env.PORT}`);
});