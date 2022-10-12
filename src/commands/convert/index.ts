import { Command } from "@oclif/core";
// import inquirer from "inquirer";
import * as inquirer from "inquirer";
import { convertComponent } from "./convert-component";
export default class Convert extends Command {
  static description = "Converts an Outline component to InlineJS.";
  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const sourceComponent = await inquirer.prompt([
      {
        name: "source",
        message: "What is the name of the original component? Ex: outline-card",
        type: "input",
        validate: function (input: string) {
          if (input && typeof input === "string") {
            return true;
          }

          return false;
        },
      },
    ]);

    const destinationComponent = await inquirer.prompt([
      {
        name: "destination",
        message: "What is the name of the original component? Ex: inline-card",
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
      src: sourceComponent.name,
      dest: destinationComponent.name,
      impression: impression.name,
    };
    convertComponent(prompts);
  }
}
