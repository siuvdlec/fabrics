module.exports = {
    preset: "ts-jest/presets/js-with-ts",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "mdx", "json"],
    testEnvironment: "jsdom",
    transform: {
        //"^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
        "^.+\\.mdx$": '<rootDir>/test/utility/empty.ts',
        "^.+\\.[tj]sx?$": "ts-jest"
    },
    testRegex: "test\\/.*test\\.tsx?$",
    collectCoverageFrom: ["src/**"]
} 
