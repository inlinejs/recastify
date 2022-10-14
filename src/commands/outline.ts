/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import { Command } from "@oclif/core";
import * as inquirer from "inquirer";
import { convertComponent } from "../core/outline-to-inline";

export default class Outline extends Command {
  static description = "Converts an Outline component to InlineJS.";
  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const isRemote = await inquirer.prompt([
      {
        name: "remote",
        message: "Is this a remote component?",
        type: "confirm",
        default: true,
      },
    ]);

    // @todo: Handle error messaging.
    const sourceScope = isRemote.remote
      ? await inquirer.prompt([
          {
            name: "scope",
            message: "What is the scope of the original component?",
            type: "input",
            default: "@phase2",
            validate: function (input: string) {
              if (input && typeof input === "string") {
                return true;
              }

              return false;
            },
          },
        ])
      : false;

    // @todo: Handle error messaging.
    const sourceComponent = isRemote.remote
      ? await inquirer.prompt([
          {
            name: "source",
            message: "What is the name of the original component?",
            type: "input",
            default: "outline-card",
            validate: function (input: string) {
              if (input && typeof input === "string") {
                return true;
              }

              return false;
            },
          },
        ])
      : false;

    const remoteComponent =
      isRemote.remote && sourceScope && sourceComponent
        ? await inquirer.prompt([
            {
              name: "remoteLocation",
              message: `Is this component located at ${sourceScope.scope}/${sourceComponent.source}?`,
              type: "confirm",
              default: true,
            },
          ])
        : false;

    const destinationComponent = await inquirer.prompt([
      {
        name: "destination",
        message: "What is the name of the new component? Ex: inline-card",
        type: "input",
        validate: function (input: string) {
          if (input && typeof input === "string") {
            return true;
          }

          return false;
        },
      },
    ]);

    const destinationPath = await inquirer.prompt([
      {
        name: "destination",
        message:
          "Where should the copied component live? Ex: ./packages/inline-card",
        type: "input",
        validate: function (input: string) {
          if (input && typeof input === "string") {
            return true;
          }

          return false;
        },
      },
    ]);

    const impression = await inquirer.prompt([
      {
        name: "impression",
        message: "How does this tool make you feel.",
        type: "list",
        choices: [{ name: "good" }, { name: "great" }, { name: "angry" }],
        validate: function (input: string) {
          if (input && typeof input === "string") {
            return true;
          }

          return false;
        },
      },
    ]);

    // const {args, flags} = await this.parse(Init)
    const prompts = {
      remote: isRemote.name,
      scope: sourceScope ? sourceScope.name : false,
      src: sourceComponent ? sourceComponent.name : false,
      package: remoteComponent ? remoteComponent.name : false,
      dest: destinationComponent.name,
      path: destinationPath.name,
      impression: impression.name,
    };
    convertComponent(prompts);
  }
}
