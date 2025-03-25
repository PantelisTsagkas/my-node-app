const request = require('supertest');
const express = require('express');

// Import the original app or recreate it for testing
const app = require('../app');

describe('Express App Routes', () => {
  // Test the root route
  test('GET / should return 200 OK', async () => {
    const response = await request(app).get('/');
    
    // Check status code
    expect(response.statusCode).toBe(200);
  });

  // Test response content type
  test('GET / should return HTML content', async () => {
    const response = await request(app).get('/');
    
    // Check content type
    expect(response.type).toBe('text/html');
  });

  // Test response body content
  test('GET / should contain welcome message', async () => {
    const response = await request(app).get('/');
    
    // Check for specific content in the response
    expect(response.text).toContain('Welcome to Our Awesome App!');
    expect(response.text).toContain('We\'re thrilled you\'re here');
  });

  // Test HTML structure
  test('GET / should have correct HTML structure', async () => {
    const response = await request(app).get('/');
    
    // Check for specific HTML elements
    expect(response.text).toMatch(/<html lang="en">/);
    expect(response.text).toMatch(/<title>Welcome!<\/title>/);
    expect(response.text).toMatch(/<div class="container">/);
  });

  // Test that no other routes exist
  test('GET /nonexistent-route should return 404', async () => {
    const response = await request(app).get('/nonexistent-route');
    
    // Check that non-existing routes return 404
    expect(response.statusCode).toBe(404);
  });
});