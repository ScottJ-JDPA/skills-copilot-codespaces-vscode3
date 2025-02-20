// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Create a comments array
const comments = [];

// Create a comment
app.post('/comments', (req, res) => {
  const { body } = req;
  comments.push(body);
  res.send('Comment added');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});