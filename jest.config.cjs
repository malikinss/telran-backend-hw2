// jest.config.cjs

const { createDefaultPreset } = require("ts-jest");
const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest/presets/default-esm",
	testEnvironment: "node",
	transform: {
		"^.+\\.ts$": ["ts-jest", { useESM: true }],
	},
	extensionsToTreatAsEsm: [".ts"],
	moduleFileExtensions: ["ts", "js", "json", "node"],

	// Применяем маппинг только к src и tests
	//moduleNameMapper: {
	//	"^(\\.{1,2}/.*)\\.js$": "$1.ts",
	//},

	moduleNameMapper: {
		"^src/(.*)\\.js$": "src/$1.ts",
		"^tests/(.*)\\.js$": "tests/$1.ts",
	},

	testMatch: ["**/tests/**/*.test.ts"],

	// Не трогаем зависимости в node_modules
	transformIgnorePatterns: ["/node_modules/(?!your-esm-package)/"],
};
