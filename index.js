const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Logging Middleware [cite: 27]
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
    next();
});

// Serve static files for our Neumorphic UI
app.use(express.static('public'));

// Route: GET / [cite: 17]
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: GET /status [cite: 18]
app.get('/status', (req, res) => {
    res.json({ status: "running", environment: process.env.NODE_ENV || "production" });
});

// Route: GET /info [cite: 25]
// Route: GET /info
app.get('/info', (req, res) => {
    res.json({
        name: "First Deployed Application",
        version: "1.0.0",
        author: "Sonia Nanwani",
        prn: "245100125" // Add your actual PRN here 
    });
});

// 404 Error Handling [cite: 26]
app.use((req, res) => {
    res.status(404).send("Error 404: Page not found");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});