# Cat API functional tests 

This project contains automated APi tests with the use of supertest & jest modules.
This project is based on an in progress [bolierplate generators](https://www.npmjs.com/package/generator-api-tests-zen) created by me 

### To Run Tests
`npm install` to install dependencies

`npm run test:api:dev` to run Api integration tests

### Test Report
Test report is generated in html and xml junit formats and are available at `./reports` directory

### CI pipeline
This project contains [github Actions](https://github.com/dineshk-qa/cat.api.tests/actions) for running tests in pipeline on every commit.
It also contains a demo gitlab pipeline config to execute tests in dev/staging env
