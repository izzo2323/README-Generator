// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === 'MIT') {
    return `This projected is Licensed under the MIT License ![GitHub License](https://img.shields.io/badge/MIT-Version-blue)`
  } else if (license === 'GPLv2') {
    return `This project is licensed under the GPLv2 license ![GitHub License](https://img.shields.io/badge/GPL-2.0-green)`
  } else if (license === 'other' || license === 'none') {
    return ''
  } else if (license === 'GPLv3') {
    return `This project is licensed under the GPLv3 license ![GitHub License](https://img.shields.io/badge/GPL-3.0-red)`
  } else if (license === 'Apache') {
    return `This project is licensed under the Apache license ![GitHub License](https://img.shields.io/badge/Apache-Version-yellow)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `# ${data.projectname}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## Testing

  ## License
  ${renderLicenseBadge(data.license)} 

  For more information on the license please click the link below.

  - ![License]('https://opensource.org/licenses/' + ${data.license})
  
  
  
`

}

module.exports = generateMarkdown;
