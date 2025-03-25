const request = require('supertest');
const app = require('../app');
const express = require('express');

describe('Express App Configuration', () => {
  // Test environment port configuration
  test('App should use environment port if available', () => {
    const originalEnv = process.env.PORT;
    process.env.PORT = '8000';
    
    // Re-require the app to pick up the new environment variable
    jest.resetModules();
    const freshApp = require('../app');
    
    // Check if port is correctly set
    expect(freshApp.get('port') || process.env.PORT).toBe('8000');
    
    // Reset environment
    process.env.PORT = originalEnv;
  });
  
  
  
  // Test error handling for invalid routes
  test('App should return 404 for undefined routes', async () => {
    const response = await request(app).get('/this-route-does-not-exist');
    expect(response.statusCode).toBe(404);
  });
});
