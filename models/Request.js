const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    whatsappNumber: { type: String, required: true },
    image: { type: String, required: true }, // Path or URL to the image
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);
