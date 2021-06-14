// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}},
    },
     {
         type: 'input',
         name: 'installation',
         message: 'How do you install your application?',
         validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
    }
    ])
    .then((data) => {
        
        console.log(data);
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("something else went wrong!");
        }
});

// TODO: Create a function to write README file
function writeToFile (data) {
   return new Promise((resolve, reject) => {

        fs.writeFile('./dist/new-README.md', data, function(err){
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Markdown File Created'
            });
            console.log('Success!');
        });
    });
}

    
// }
// // TODO: Create a function to initialize app
// function init() {
  
 
// };

// // Function call to initialize app
// init();
