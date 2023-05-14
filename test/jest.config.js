module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/test/',
      '/src/main.ts',
      '/src/app.module.ts',
      '/src/**/*.dto.ts',
      '/src/**/*.interface.ts',
    ],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.test.json',
      },
    },
  };
  