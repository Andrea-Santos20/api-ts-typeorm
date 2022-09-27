export default {
  // bail: false,
  // clearMocks: true,
  // coverageProvider: "v8",
  // preset: "ts-jest",
  // testMatch: [
  //   "**/**/**.test.ts)",
  // ],
  jest: {
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: "src",
    testRegex: ".*\\.test\\.ts$",
    transform: {
      "^.+\\.(t|j)s$": "ts-jest",
    },
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "../coverage",
    testEnvironment: "node",
  },
};
