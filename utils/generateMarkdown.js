const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
};

function generateMarkdown(data) {
  writeToFile();
  return `# ${data.title}
  *Installation
  ${data.installation}

`;
}

module.exports = {generateMarkdown, writeToFile};
