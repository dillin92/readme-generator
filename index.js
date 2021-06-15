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
         name: 'description',
         message: 'Provide a brief description of your application',
         validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?',
        validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
   },
   {
    type: 'input',
    name: 'usage',
    message: 'How do you use your application?',
    validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the guidelines to contributing to your application?',
        validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can you test your application?',
        validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license are you using?',
        choices: ['MIT','GPL', 'Apache', 'none'] 

    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
        validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
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


