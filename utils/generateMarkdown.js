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

function generateMarkdown(fileContent) {
  const { title, installation } = fileContent;
  return `# ${fileContent.title}
  ## Description
  ${fileContent.description}
  ## Installation
  ${fileContent.installation}
  ## Usage Information
  ${fileContent.usage}
  ## Contribution Guidlines
  ${fileContent.contribution}
  ## Testing the application
  ${fileContent.test}

  ## Questions
  *You can check out my Github Profile at the link below*

  [${fileContent.github}](http://github.com/${fileContent.github})

  *If you need to reach me with additional questions my email is:*

  ${fileContent.email}`;
};

module.exports = generateMarkdown;
