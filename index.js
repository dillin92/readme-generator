// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    question = "What is your project title?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
       question= questions.question
    ])
    .then((answers) => {

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(err);
        } else {
            console.log("something else went wrong!");
        }
    });
};

// Function call to initialize app
init();
