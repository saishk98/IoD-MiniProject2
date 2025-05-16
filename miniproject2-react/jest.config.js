export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  }
};