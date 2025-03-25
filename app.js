const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/styles', express.static(path.join(__dirname, 'src/styles')));
app.use('/scripts', express.static(path.join(__dirname, 'src/scripts')));
app.use('/views', express.static(path.join(__dirname, 'src/views')));

// Route for the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'));
});

// Only listen if this file is being run directly (not imported for testing)
if (require.main === module) {
    app.listen(port, () => {
        console.log(`App running on http://localhost:${port}`);
    });
}

module.exports = app;