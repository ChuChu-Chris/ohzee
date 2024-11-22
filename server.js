const express = require('express');
const dotenv = require('dotenv');
const path =  require("path")
const connectDB = require('./config/db');
const requestRoutes = require('./routes/requestRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use((req, res, next) => {
    console.log(`Received ${req.method} request at ${req.url}`);
    next();
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/requestViews', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'requestViews.html'));
});
 // Serve images
app.use('/api', requestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
