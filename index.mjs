import inquirer from 'inquirer';
import fs from "fs/promises";
// import { Console } from 'console';

let { gitHubName, email, title, description, installation, usage, license, contributing, tests } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'gitHubName',
            message: "What is your GitHub username? ",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address? ",
        },
        {
            type: 'input',
            name: 'title',
            message: "What is the title of the project",
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Decribe the installation instructions",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide further usage information for the project",
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license would you like to add?',
            choices: ['MIT', 'Mozilla', 'Apache 2.0'],
            filter(val) {
                return val.toLowerCase();
            },
        },
        {
            type: 'input',
            name: 'contributing',
            message: "How can someone contribute to this project?",
        },
        {
            type: 'input',
            name: 'tests',
            message: "How can you test the project",
        },
    ])



let readmeText = `
# **Project Title:** ${title}  
---
${generateLicense(license)}
---

## **Project Description**
${description}

## **Table of Contents**
- [Installation Instructions](###InstallationInstructions)
- [Usage Information](###UsageInformation)
- [License](####License)
- [Contributing](###Contributing)
- [Tests](###Tests)
- [Questions](###Questions)
   
## **Installation Instructions**
${installation}
    
## **Usage Information**
${usage}

## **License**
Licensed under the ${license} license

## **Contributing**
${contributing}

## **Tests**
${tests}

## **Questions**
- GitHub account https://github.com//${gitHubName}

- For any additional questions please reach me at **${email}**
---
&copy; 2023 manolisgi
`

fs.writeFile("README.md", readmeText)




function generateLicense(license) {

    if (license === "MIT") {

        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (license === "Mozzila") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}