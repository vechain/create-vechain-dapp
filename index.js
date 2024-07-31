#!/usr/bin/env node

/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */

import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  writeFile,
  lstat,
  readdir,
  mkdir,
  copyFile,
  readFile,
} from "node:fs/promises";
import prompts from "prompts";

const templates = [
  {
    value: "x-app-template",
    title: "X-App Template",
    description: "X-App Template for VeBetterDAO 🚀",
  },
  {
    value: "react-dapp-template",
    title: "Fiorino React dApp Template",
    description: "Simple React dApp to mint and send a token called Fiorino 🤑",
  },
];

const copyFilesAndDirectories = async (source, destination) => {
  const entries = await readdir(source);

  for (const entry of entries) {
    const sourcePath = path.join(source, entry);
    const destPath = path.join(destination, entry);

    const stat = await lstat(sourcePath);

    if (stat.isDirectory()) {
      // Create the directory in the destination
      await mkdir(destPath);

      // Recursively copy files and subdirectories
      await copyFilesAndDirectories(sourcePath, destPath);
    } else {
      // Copy the file
      await copyFile(sourcePath, destPath);
    }
  }
};

const renamePackageJsonName = async (targetDir, projectName) => {
  const packageJsonPath = path.join(targetDir, "package.json");
  try {
    const packageJsonData = await readFile(packageJsonPath, "utf8");
    const packageJson = JSON.parse(packageJsonData);
    packageJson.name = projectName;
    await writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf8"
    );
  } catch (err) {
    console.log(err.message);
  }
};

(async () => {
  try {
    const response = await prompts([
      {
        type: "select",
        name: "template",
        message: "Select template",
        choices: templates,
      },
      {
        type: "text",
        name: "projectName",
        message: "Enter your project name",
        initial: "name",
        format: (val) => val.toLowerCase().split(" ").join("-"),
      },
    ]);
    const { projectName, template } = response;

    const targetDir = path.join(process.cwd(), projectName);
    const sourceDir = path.resolve(
      fileURLToPath(import.meta.url),
      "../templates",
      `${template}`
    );

    if (!fs.existsSync(targetDir)) {
      // Copying logic
      console.log("Target directory doesn't exist");
      console.log("Creating directory...");
      fs.mkdirSync(targetDir, { recursive: true });
      console.log("Finished creating directory");
      await copyFilesAndDirectories(sourceDir, targetDir);
      await renamePackageJsonName(targetDir, projectName);
      console.log(`Finished generating your project ${projectName}`);
      console.log(`cd ${projectName}`);
      console.log(`npm install`);
    } else {
      throw new Error("Target directory already exist!");
    }
  } catch (err) {
    console.log(err.message);
  }
})();
