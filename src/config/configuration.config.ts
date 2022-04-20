import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export const configConfiguration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});

const YAML_CONFIG_DIR = 'config/';
const YAML_CONFIG_FILENAME = 'dev.yaml';

export const yamlConfiguration = () => {
  return yaml.load(
    readFileSync(
      join(__dirname, YAML_CONFIG_DIR, YAML_CONFIG_FILENAME),
      'utf8',
    ),
  ) as Record<string, any>;
};
