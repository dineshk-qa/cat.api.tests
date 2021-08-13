const fs = require('fs');

const { TEST_ENV } = process.env;

switch (TEST_ENV) {
  case 'dev':
    fs.copyFileSync('./envs/.env.dev', './.env');
    break;
  case 'staging':
    fs.copyFileSync('./envs/.env.staging', './.env');
    break;
  default:
    fs.copyFileSync('./envs/.env.dev', './.env');
    break;
}
