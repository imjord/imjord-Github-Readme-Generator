// TODO: Include packages needed for this application

const fs = require('fs');
const generateRead = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const { rejects } = require('assert');





// TODO: Create an array of questions for user input
const userQuestions =  [
        {   
            type: 'input',
            name: 'title',
            message: 'What is your Read Me Title',
            validate: readTitle => {
                if(readTitle){
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?(required)',
            validate: gitName => {
                if(gitName) {
                    return true;
                } else {
                    console.log('please enter a GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?'
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?(required)',
            validate: projName => {
                if(projName) {
                    return true;
                } else {
                    console.log('please enter a name for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please provide a description for your project(required)',
            validate: projectDes => {
                if(projectDes) {
                    return true;
                } else {
                    console.log('please enter a description for your project');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenseType',
            message: 'What license would you like to apply?(use the arrow keys please)',
            choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'NONE'],
            
        },
        {
            type: 'input',
            name: 'command',
            message: 'What command should run to install dependcies',
            default: 'npm i'

            
        },
        {
            type: 'input',
            name: 'commandTest',
            message: 'What command to run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'know',
            message: 'What does the user need to know about this repo?',
        }
    ]
inquirer.prompt(userQuestions)
.then(answers  => { console.log(answers)
writeToFile('./dist/readme.md', generateRead(answers))
});



const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        return;
    })
}

// TODO: Create a function to initialize app
function init() {

    

}

// Function call to initialize app
init();
