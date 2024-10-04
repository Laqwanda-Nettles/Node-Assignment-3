# Project: Betsy's Dairy Farm Survey Tool

## Objective

The purpose of this project is to create a modular Node.js command-line survey tool that collects user preferences using the `Inquirer` package. The project demonstrates how to structure code into reusable modules for different survey questions and integrates user input handling into a cohesive application. Additionally, the output is made more interactive using `cowsay` and `chalk` to liven up the user experience.

## Project Structure

The project is divided into modular components. Each module represents a different question in the survey. The main application (`survey.js`) imports these modules and uses `Inquirer` to prompt users.

### Modules

`favCheese.js`  
This module exports an object containing a question about the user's favorite type of cheese.  
`favIceCream.js`  
This module exports an object containing a question about the user's favorite ice cream flavor.  
`favMilk.js`
This module exports an object containing a question about the user's favorite flavor of milk.

### Main Application (`survey.js`)

The main application file imports the question modules and prompts the user for their preferences. It also uses `cowsay` to welcome the user and `chalk` to style the output.

## Installation and Setup

1. **Clone the Repository:**

```bash
git clone <repo-url>
cd <repo-directory>
```

2. **Install Dependencies:** Initialize a `package.json` file and install the required npm modules:

```bash
npm init -y
npm install @inquirer/prompts cowsay chalk
```

3. **Run the Survey:** After setting up the project, you can run the survey tool using:

```bash
node survey.js
```

## How It Works

- The program will prompt the user for their name.
- After the name input, the user will be asked three questions:
  1. Favorite cheese
  2. Favorite ice cream flavor
  3. Favorite milk flavor
- The responses are displayed with stylized output using `chalk` and a fun welcome message generated with `cowsay`.

![alt text](<Screenshot 2024-10-04 102111.png>)

## Modules Used

- **Inquirer:** For prompting user input.
- **Cowsay:** To display a welcoming message in a fun, ASCII-art style.
- **Chalk:** To style console output with colors and text effects.
