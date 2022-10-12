import type { Config } from '@jest/types';
import { defaults } from 'jest-config';  

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
    '^.+\\.tsx ? $': 'ts-jest',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};

export default config;