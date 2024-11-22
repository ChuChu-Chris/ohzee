const Request = require('../models/Request');

// Create a new request
exports.createRequest = async (req, res) => {
    try {
        const { name, description, budget, whatsappNumber, } = req.body;
        const image = req.file ? req.file.filename : null;
        const newRequest = new Request({ name, description, budget, whatsappNumber,image });
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Read all requests
exports.getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a request by ID
exports.updateRequest = async (req, res) => {
    try {
        const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a request by ID
exports.deleteRequest = async (req, res) => {
    try {
        await Request.findByIdAndDelete(req.params.id);
        res.json({ message: 'Request deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
