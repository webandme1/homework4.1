const express = require('express');
const app = express();
const port = 8080;

// Define the endpoints
app.get('/profile', (req, res) => {
    res.send('This is the /profile page!');
});

app.get('/products', (req, res) => {
    res.send('This is the /products page!');
});

app.get('/cart', (req, res) => {
    res.send('This is the /cart page!');
});

app.get('/register', (req, res) => {
    res.send('This is the /register page!');
});

app.get('/login', (req, res) => {
    res.send('This is the /login page!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
