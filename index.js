#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import createDirectoryContents from "./createDirectoryContents.js";

const currentDir = process.cwd();
// const __dirname = dirname(fileURLToPath(import.meta.url));
// Works with node v20.11+
const __dirname = import.meta.dirname;
const templateDir = path.resolve(__dirname, "templates");

const templateChoices = fs.readdirSync(templateDir);

const QUESTIONS = [
  {
    name: "template-choice",
    type: "list",
    message: "What project template would you like to generate?",
    choices: templateChoices,
  },
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters, numbers, underscores and hashes.";
    },
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  // template dir chosen
  const projectChoice = answers["template-choice"];

  // user input of project name
  const projectName = answers["project-name"];

  // Full path to the chosen template dir
  const templatePath = `${templateDir}/${projectChoice}`;

  // Path to create the new project directory
  const projectDir = path.resolve(currentDir, projectName);

  // Create the project directory with the project name.
  fs.mkdirSync(projectDir, { recursive: true });
  // Copy the files from the
  fs.cpSync(templatePath, projectDir, { recursive: true });
  // createDirectoryContents(templatePath, projectName);
});
