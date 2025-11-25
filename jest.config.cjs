const { createDefaultPreset } = require('ts-jest');
const tsJestPreset = createDefaultPreset();

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  transform: {
    ...tsJestPreset.transform,
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
