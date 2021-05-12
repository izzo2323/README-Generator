// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions =
    [
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
            message: 'What is your GitHub username? (Required)',
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
            name: 'email',
            message: 'Please enter your email. (Required)',
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email!');
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
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: descriptioninput => {
                if (descriptioninput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What infomation is to install and run the program?',
            // velidate: installinput => {
            //     if (installinput) {
            //         return true;
            //     } else {
            //         console.log('Please list installation instructions!'),
            //         return false;
            //     }
            // }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please enter any licenses your project has.',
            choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'other', 'none'],
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What information is needed about using this program?'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What information is needed about contributing to the project?'
        },



    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writetofile data", data)
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('This is wrong');
        } else {
            console.log('README created successfully');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answer => {
            console.log(answer);
            writeToFile('README.md', markdown(answer));

        })
}

// Function call to initialize app
init();

// let answers = questions();
// console.log(answers)