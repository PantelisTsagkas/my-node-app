const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome!</title>
        <style>
          body {
            font-family: sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            background-color: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h1 {
            color: #333;
            margin-bottom: 20px;
          }
          p {
            color: #666;
            line-height: 1.6;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Our Awesome App!</h1>
          <p>We're thrilled you're here. This is a simple homepage for our application.</p>
          <p>Feel free to explore and see what we have to offer!</p>
        </div>
      </body>
      </html>
    `);
  });

// Only listen if this file is being run directly (not imported for testing)
if (require.main === module) {
    app.listen(port);
    console.log(`App running on http://localhost:${port}`);
  }
  
  // Export the app for testing
  module.exports = app;