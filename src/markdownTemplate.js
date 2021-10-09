const generateMarkdown = data => {
    return `
      # ${data.title}
  
      ## Description
  
      ${data.descripton}
  
      ## Table of Contents
  
      * [Installation](#installation)
      * [Usage](#usage)
      * [Credits](#credits)
      * [License](#license)
      * [Features](#features)
      * [Contributing](#contributing)
      * [Test](#tests)
      * [Questions](#questions)
      
  
      ## Installation
  
      ${data.installation}
  
      ## Usage
  
      ${data.usage}
  
      ## Credits
  
      ${data.credits}
  
      ## License
  
      ${data.license}
  
      ## Features
  
      ${data.features}
  
      ## Contributing
  
      ${data.contributing}
  
      ## Tests
  
      ${data.tests}
  
      ## Questions
  
      [My GitHub Profile](https://github.com/${data.github})
  
      To reach me with questions, please email: ${data.email}
  
    `;
  }
  
  module.exports = generateMarkdown;