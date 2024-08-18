import nxPreset from "@nx/jest/preset";

const { testEnvironment, ...rest } = nxPreset;

module.exports = {
  ...rest,
  preset: "jest-playwright-preset",
  displayName: "e2e",
  globals: {},
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["chromium"],
    },
  },
};
