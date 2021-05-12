// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === 'MIT') {
    return `![GitHub License](https://img.shields.io/badge/MIT-Version-blue)`
  } else if (license === 'GPLv2') {
    return `![GitHub License](https://img.shields.io/badge/GPL-2.0-green)`
  } else if (license === 'other' || license === 'none') {
    return ''
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
  - [Usage] (#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ### Installation 
  ${data.install}

  ## License
  ${renderLicenseBadge(data.license)};
`;
}

module.exports = generateMarkdown;
