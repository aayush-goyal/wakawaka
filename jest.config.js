const config = {
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleFileExtensions: ['ts', 'js'],
    preset: 'ts-jest/presets/default-esm',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
        '!/**/*.type.ts',
        '!**/node_modules/**'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    extensionsToTreatAsEsm: ['.ts'],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['src/utils/swagger.ts'],
    transform: {
        '^.+\\.(ts)$': [
            'ts-jest',
            {
                diagnostics: {
                    ignoreCodes: [1343]
                },
                astTransformers: {
                    before: [
                        {
                            path: 'node_modules/ts-jest-mock-import-meta' // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
                        }
                    ]
                }
            }
        ]
    }
};

export default config;
