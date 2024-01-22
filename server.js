const express = require('express');
const app = express();
const port = 8070;

// Define the endpoints
app.get('/profile', (req, res) => {
    res.send('This is the /profile page!');
});

app.get('/products', (req, res) => {
   // res.send('This is the /products page!');
// List of products
const products = ['Milk', 'Eggs', 'Cheese', 'Pork', 'Shrimp', 'Chicken'];

// Get the search query parameter
const search = req.query.search;

// Check if the product is in the list
if (search && products.includes(search.charAt(0).toUpperCase() + search.slice(1).toLowerCase())) {
    res.send(`Product "${search}" found.`);
} else {
    res.send(`Product "${search}" not found.`);
}

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
