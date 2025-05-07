// Import express module
const express = require('express');
const path = require('path');

// Create an instance of the express app
const app = express();

// Define the port
const port = 1234;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Route to serve the index.html file (React app)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
