// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fileContent = process.argv.slice(2, process.argv.length);
// TODO: Create an array of questions for user input
const promptUser = () =>{ 
   return inquirer.prompt([
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
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
   return new Promise((resolve, reject) => {

        fs.writeFile('./dist/new-README.md', fileContent, err => {
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

};
    
promptUser()
.then(fileContent => {
    return generateMarkdown(fileContent);
})
.then(pageMarkdown => {
    return writeToFile(pageMarkdown);
})
.catch(err => {
    console.log(err);
});

// //TODO: Create a function to initialize app
//  function init() {
//      promptUser();
//  };

// // // Function call to initialize app
//   init();
