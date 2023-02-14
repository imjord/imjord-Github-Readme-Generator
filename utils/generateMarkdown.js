console.log("\x1b[32m", "Welcome to imjords README generator template!!!");
    
console.log("\x1b[31m", "Please be aware of markdown syntax when answering questions or your README will not be formatted correctly thank you!");
console.log("=============================================================================================================");
// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)

  // data.skillsUsed is a string of skills seperated by commas
  // we need to split the string into an array
  // then we need to map over the array and return a string of markdown for each skill
 
  // const skillsUsed = data.projectSkillsUsed.split(',').map(skill => {
  //   return `* ${skill}
  //   `
  // }).join('')
  const skillsUsed = data.projectSkillsUsed.split(',').map(skill => {
    return ` ![image](https://img.shields.io/badge/${skill}-<3-${data.badgeColor}?style=for-the-badge&logo=appveyor})
    `
  }).join('')
 

  return `<a name="readme-top"></a>

  ![GitHub contributors](https://img.shields.io/github/contributors/${data.username}/${data.repoName}?color=%23454B1B&label=CONTRIBUTORS%20%3C3&style=for-the-badge)
  ![GitHub forks](https://img.shields.io/github/forks/${data.username}/${data.repoName}?style=for-the-badge)
  ![GitHub Repo stars](https://img.shields.io/github/stars/${data.username}/${data.repoName}?style=for-the-badge)
  ![GitHub](https://img.shields.io/github/license/${data.username}/${data.repoName}?style=for-the-badge)
  
  
  
  
  <div align="center">
  <h3 align="center">${data.projectTitle}</h3>
<p align="center">
 ${data.projectDescription}
<br />
<br />
<a href="https://github.com/${data.username}/${data.repoName}">View Demo</a>
 ·
      <a href="https://github.com/${data.username}/${data.repoName}/issues">Report Bug</a>
      ·
      <a href="https://github.com/${data.username}/${data.repoName}/issues">Request Feature</a>
    </p>
  </div>
  
  
  <!-- TABLE OF CONTENT -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
    </ol>
  </details>
  
  
  <!-- ABOUT THE PROJECT -->
  ## About The Project
  
  
  
  
  ${data.projectAbout}
  
  
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  ### Built With
  
  
  ${skillsUsed}
  
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- GETTING STARTED -->
  ## Getting Started
  
  If you would like to clone the repo hopefully this will help.
  
  ### Prerequisites
  
 ${data.projectPrequisites}
  
  ### Installation
  
  1. Clone the repo
      \`\`\`sh
      git clone https://github.com/${data.username}/${data.repoName}.git
      \`\`\`
  2. Install NPM packages in both client and server folders
      \`\`\`sh
      npm install
      \`\`\`
  3. Create a .env file in the server folder and add your own MongoDB URI
      \`\`\`sh
      MONGODB_URI=YOUR_OWN_MONGODB_URI
      \`\`\`
  4. Run the start commands in both client and server folders (commands are in the package.json files).
      \`\`\`sh
      npm start / npm run dev
      \`\`\`
  5. Enjoy! made with <3 by ${data.username}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- USAGE EXAMPLES -->
  ## Usage
  
  ${data.projectUsage}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- ROADMAP -->
  ## Roadmap
  
  - [] ${data.projectRoadmap}
  
  
  See the [open issues](https://github.com/${data.username}/${data.repoName}/issues) for a full list of future proposed features (and known issues).
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- CONTRIBUTING -->
  ## Contributing
  
  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
  Don't forget to give the project a star! Thanks again!
  
  1. Fork the Project
  2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
  3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
  4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
  5. Open a Pull Request
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- LICENSE -->
  ## License
  
  ${data.projectLicense}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- CONTACT -->
  ## Contact
  
  Just message me on github mang <3 ${data.username}
  
  Project Link: [https://github.com/${data.username}/${data.repoName}](https://github.com/${data.username}/${data.repoName})
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>`;
}

module.exports = generateMarkdown;
