// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubname',
            message: 'What is your GitHub username?',
            validate: (githubname) => {
                if (githubname) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectname',
            message: 'What is the name of your Project? (Required)',
            validate: (projectNameInput) => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter a Project Name!');
                    return false;
                }
            }
        },
        {
            input: 'input',
            name: 'description',
            message:'Please enter a description of your project.',
            validate: descriptioninput => {
                if (descriptioninput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        }

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(questions);

questions();