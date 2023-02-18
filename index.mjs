import inquirer from 'inquirer';
import fs from "fs/promises";
// import { Console } from 'console';

let {title, description, installation, usage, license, contributing, tests} = await inquirer
    .prompt([
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
            choices: ['BSD 3-Clause', 'Boost Software', 'Apache 2.0'],
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
    # Project Title
    ${title}

    ## Project Description
    ${description}
    
    ### Installation Instructions
    ${installation}
    
    ### Usage Information
    ${usage}

    ### License
    ${generateLicense(license)}

    ### Contributing 
    ${contributing}

    ### Tests
    ${tests}

    // ###### The smallest heading

    `
    
    fs.writeFile("README.md", readmeText)

    function generateLicense(license) {
        console.log(license);
        
        if(license === "BSD 3-Clause"){
            
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        }
        else if(license === "Boost Software"){
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        }
        else return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }