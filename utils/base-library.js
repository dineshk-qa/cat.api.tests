const { v4: uuidv4 } = require('uuid');
require('dotenv-safe').config();

module.exports = {
  async authHeader() {
    return {
      'x-api-key': process.env.API_KEY,
      'user-agent': 'API-Test',
    };
  },
  uuid() {
    return uuidv4();
  },
};
