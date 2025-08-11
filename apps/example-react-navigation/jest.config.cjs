/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    preset: "jest-expo",
    transformIgnorePatterns: [
      "<rootDir>/../../node_modules/(?!(@react-native|react-native|@react-navigation)/)",
    ],
    setupFilesAfterEnv: ["<rootDir>/tests/init.ts"],
    testTimeout: 99999,
  }
}
