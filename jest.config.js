module.exports = {
  testMatch: ['**/?(*)+(spec|test).[jt]s?(x)'],
  verbose: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports',
        filename: 'report.html',
        expand: true,
      },
    ],
    [
      'jest-junit',
      {
        outputDirectory: './reports',
        outputName: 'junit.xml',
      },
    ],
  ],
  setupFilesAfterEnv: ['./config/jest.setup.js'],
};
