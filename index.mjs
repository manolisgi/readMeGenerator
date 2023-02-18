import inquirer from 'inquirer';
// import fs from "fs/promises"

let {first_name, last_name} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's your last name",
            default() {
                return 'Doe';
            },
        },
    ])
console.log(first_name, last_name);

// # The largest heading

// ## The second largest heading

// ###### The smallest heading