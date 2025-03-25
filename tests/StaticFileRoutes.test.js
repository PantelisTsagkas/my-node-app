const request = require('supertest');
const app = require('../app');
const path = require('path');

describe('Static File Routes', () => {
  // Test the CSS route
  test('GET /styles/main.css should serve CSS file', async () => {
    const response = await request(app).get('/styles/main.css');
    
    // Check status code
    expect(response.statusCode).toBe(200);
    
    // Check content type
    expect(response.headers['content-type']).toMatch(/text\/css/);
  });

  // Test the JS route
  test('GET /scripts/main.js should serve JavaScript file', async () => {
    const response = await request(app).get('/scripts/main.js');
    
    // Check status code
    expect(response.statusCode).toBe(200);
    
    // Check content type
    expect(response.headers['content-type']).toMatch(/javascript/);
  });
  
  // Test 404 for non-existent file
  test('GET /nonexistent.file should return 404', async () => {
    const response = await request(app).get('/nonexistent.file');
    
    // Check status code
    expect(response.statusCode).toBe(404);
  });
});
