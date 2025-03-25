const request = require('supertest'); // Import supertest
const app = require('../app'); // Import the app to test

test('GET /images/cicd-pipeline.png should return the image', async () => {
    const response = await request(app).get('/images/cicd-pipeline.png');
    
    // Check that the response status is 200 (OK)
    expect(response.statusCode).toBe(200);

    // Check that the content type is an image (e.g., PNG)
    expect(response.headers['content-type']).toBe('image/png');
});