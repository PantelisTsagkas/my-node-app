const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Node.js App!</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

