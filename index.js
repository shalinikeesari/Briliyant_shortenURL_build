// url-shortener-backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const Url = require('./models/Url.js'); // Adjust the path if necessary
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://keesarichithra2006:MqqWDTmxcL3p59cP@cluster0.0k8gq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Shorten URL endpoint
app.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = `http://short.ly/${Math.random().toString(36).substring(2, 8)}`; // Example short URL logic
  
  try {
    const url = new Url({ longUrl, shortUrl });
    await url.save();
    res.status(201).json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: "Error saving to database" });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});


