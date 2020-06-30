module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  moduleFileExtensions: ["ts", "tsx", "jsx", "js"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
  testRegex: ".(spec|test).(tsx|ts)$",
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/config/test-config/setupTests.ts"
  ]
};
