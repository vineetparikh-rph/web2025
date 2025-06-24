// Vercel serverless function entry point
const path = require('path');

// Set environment for Vercel
process.env.VERCEL = '1';
process.env.NODE_ENV = 'production';

// Import the built server which sets up the Express app
require('../dist/index.js');

// Export the Express app that was set on global
module.exports = global.app;