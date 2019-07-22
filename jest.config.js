module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/components/**/*.vue',
    '<rootDir>/app/pages/**/*.vue',
  ],
  globals: {
    'ts-jest': {
      diagnostics: {
        pathRegex: /\.spec\.ts$/,
      },
    },
  },
}
