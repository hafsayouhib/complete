import express from'express'
const app = express();
import path from 'path'
const port = 8000; // You can choose any available port

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML form on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(files, 'login.html'));
});

// Handle POST request from the login form
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check credentials (replace with your authentication logic)
  if (username === 'user' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
