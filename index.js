// imports
const fs = require('fs');
const generateRead = require('./utils/generateMarkdown');
const inquirer = require('inquirer');






const userQuestions =  [
    
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (must be exact as it is on github).',
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
            name: 'repoName',
            message: 'What is your repo name? (must be exact as it is on github).',
            validate: repoName => {
                if(repoName){
                    return true;
                } else {
                    console.log('please enter a name for your repo');

                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the title of your project?',
            validate: proTitle => {
                if(proTitle) {
                    return true;
                } else {
                    console.log('please enter a title for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please provide a short description for your project(required)',
            validate: proDesc => {
                if(proDesc) {
                    return true;
                } else {
                    console.log('please enter a description for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectAbout',
            message: 'Please tell users about your project',
            validate: projectAbout => {
                if(projectAbout) {
                    return true;
                } else {
                    console.log('please enter an about for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectSkillsUsed',
            message: 'What skills did you use to create this project? (please seperate with commas and no spaces)',
            validate: projectSkills => {
                if(projectSkills) {
                    return true;
                } else {
                    console.log('please enter a list of skills used');
                    return false;
                }
            }
            
        },
        {
            type: 'checkbox',
            name: 'badgeColor',
            message: 'What color would you like your badge to be?',
            choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'lightgrey', 'blue'],
            validate: badgeColor => {
                if(badgeColor) {
                    return true;
                } else {
                    console.log('please pick a color');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectPrequisites',
            message: 'What are the prequisites needed for this project?',
            validate: projectPre => {
                if(projectPre) {
                    return true;
                } else {
                    console.log('please enter a list of prequisites');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'How does a user use this project?(please provide instructions/usage)',
            validate: projectUsage => {
                if(projectUsage) {
                    return true;
                } else {
                    console.log('please enter instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectRoadmap',
            message: 'What is the roadmap for this project?',
            validate: projectRoad => {
                if(projectRoad) {
                    return true;
                } else {
                    console.log('please enter a roadmap');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'projectLicense',
            message: 'What license would you like to apply?(use the arrow keys please)',
            choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'NONE'],
        }
    ]
inquirer.prompt(userQuestions)
.then(answers  => { 
writeToFile('./dist/readme.md', generateRead(answers))
});


// writeToFile function
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        return;
    })
}


