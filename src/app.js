// src/app.js
const express = require('express');
const app = express();
const controller = require('./controller');

app.use(express.json());

const port = process.env.PORT || 3000;

// Routes
app.get('/api/items', controller.getItems);
app.post('/api/items', controller.createItem);
app.put('/api/items/:id', controller.updateItem);
app.delete('/api/items/:id', controller.deleteItem);

// Start the server
app.listen(port, () => {
    console.log(`API is running on http://localhost: ${port}`);
});

module.exports = app;