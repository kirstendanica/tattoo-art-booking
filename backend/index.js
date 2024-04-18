const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from the Tattoo Artist Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
