// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';

  }
  return `![badge](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title for read me: ${data.title} 

  ## GitHub User: ${data.userName}

  ## User Email: ${data.email}

  ### Project Name: ${data.projectName}

  #### Project Description: ${data.projectDescription}

  ##### Repo License: ${data.licenseType}

  #### Badge: 

  ${renderLicenseBadge(data.licenseType)}

  ###### Repo Info: ${data.know}


`;
}

module.exports = generateMarkdown;
