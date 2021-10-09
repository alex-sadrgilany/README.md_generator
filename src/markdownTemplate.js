const generateDescription = data => {

}

const generateInstallation = data => {

}

const generateUsage = data => {

}

const generateCredits = data => {

}

const generateLicense = data => {

}

const generateFeatures = data => {

}

const generateContributing = data => {

}

const generateTests = data => {

}

const generateQuestions = data => {

}

const generateTable = data => {

}

const generateMarkdown = data => {
    return `
# ${data.title}

## Description

${data.description}

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