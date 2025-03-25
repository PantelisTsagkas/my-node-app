const request = require('supertest');
const app = require('../app');

test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Welcome to My Node.js App!');
});
