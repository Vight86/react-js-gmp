module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['MoviesAPI.ReactJS', 'node_modules', 'coverage'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'babel-jest',
    '\\.(scss|css)$': 'identity-obj-proxy',
  },
};
