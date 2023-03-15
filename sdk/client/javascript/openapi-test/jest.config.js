/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testTimeout: 7000,
    verbose: true,
    collectCoverage: true,
    testEnvironment: 'node',
    testRegex: '/test/.*\\.(test|spec)?\\.(js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
