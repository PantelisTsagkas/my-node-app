const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve static files from a 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DevOps Assignment - BPP University</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
            color: #333;
            line-height: 1.6;
          }
          .container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            max-width: 500px;
            width: 90%;
            text-align: center;
          }
          h1 {
            color: #2c3e50;
            margin-bottom: 20px;
          }
          .pipeline-btn {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 20px;
            font-size: 16px;
          }
          .pipeline-btn:hover {
            background-color: #2980b9;
          }
          #pipelineImage {
            max-width: 100%;
            margin-top: 20px;
            display: none;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>DevOps Assignment</h1>
          <p>Presented by a Student of BPP University</p>
          <p>This project demonstrates a CI/CD pipeline implementation.</p>
          
          <button class="pipeline-btn" onclick="togglePipelineImage()">
            View CI/CD Pipeline Architecture
          </button>
          
          <img id="pipelineImage" src="/cicd-pipeline.png" alt="CI/CD Pipeline Architecture">
        </div>

        <script>
          function togglePipelineImage() {
            const image = document.getElementById('pipelineImage');
            if (image.style.display === 'block') {
              image.style.display = 'none';
            } else {
              image.style.display = 'block';
            }
          }
        </script>
      </body>
      </html>
    `);
});

// Only listen if this file is being run directly (not imported for testing)
if (require.main === module) {
  app.listen(port);
  console.log(`App running on http://localhost:${port}`);
}

module.exports = app;