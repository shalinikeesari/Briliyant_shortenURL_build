const mongoose = require('mongoose');

// Define the URL schema
const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true }
});

// Create the model
module.exports = mongoose.model('Url', urlSchema);
