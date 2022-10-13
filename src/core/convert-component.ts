import chalk = require("chalk");
import { execSync } from "node:child_process";

type Prompts = {
  remote: boolean;
  scope: string | boolean;
  src: string | boolean;
  package: string | boolean;
  dest: string;
  path?: string;
  impression?: string;
};

/**
 * Convert a component from one framework to another.
 *
 * @param {string} prompts - prompts: Object of the values from the prompt questions;
 * @returns NULL
 */
export const convertComponent = (prompts: Prompts): void => {
  try {
    execSync(`echo "Converting ${prompts.src} to ${prompts.dest}..."`);
  } catch (error) {
    throw console.error(`${chalk.red("error")}: ${error}`);
  }
};
