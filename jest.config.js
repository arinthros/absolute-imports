module.exports = {
  automock: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '^(.+)/([^/]+)$/node_modules/',
    '^(.+)/([^/]+)$/dist/',
  ],
}
