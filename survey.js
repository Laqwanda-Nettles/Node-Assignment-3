import { select, input } from "@inquirer/prompts";
import { cheese } from "./questions/favCheese.js";
import { iceCream } from "./questions/favIceCream.js";
import { milk } from "./questions/favMilk.js";
import { say } from "cowsay";
import chalk from "chalk";

const name = await input({ message: "Enter your name :" });
console.log(
  say({
    text: `Welcome ${name}, to Betsy's Dairy Farm survey!`,
  })
);

const cheeseSelection = await select(cheese);
const iceCreamSelection = await select(iceCream);
const milkSelection = await select(milk);

console.log(
  chalk.blue.bold(`
    Thank you ${name} for your responses! Here are the results:`)
);
console.log(
  chalk.whiteBright.bgBlue("Favorite Cheese:") + ` ${cheeseSelection}`
);
console.log(
  chalk.whiteBright.bgBlue("Favorite Ice Cream:") + ` ${iceCreamSelection}`
);
console.log(chalk.whiteBright.bgBlue("Favorite Milk:") + ` ${milkSelection}`);
