# Cat API functional tests 

This project contains automated APi tests with the use of supertest & jest modules

### To Run Tests
`npm install` to install dependencies

`npm run test:api:dev` to run Api integration tests

### Test Report
Test report is generated in html and xml junit formats and are available at `./reports` directory

### CI pipeline
This project contain github Actions for running tests in pipeline.
It also contains a demo gitlab pipeline config to execute tests in dev/staging env
