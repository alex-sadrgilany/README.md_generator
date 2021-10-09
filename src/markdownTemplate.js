// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (licenseText) => {
    if (licenseText = "Apache 2.0") {
        return `
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;
    }
    else if (licenseText = "GNU GPL 3.0") {
        return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`;
    }
    else if (licenseText = "MIT") {
        return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
    }
    else if (licenseText = "Mozilla 2.0") {
        return `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
`;
    }
    else if (licenseText = "Open/No License") {
        return "";
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const generateCredits = creditsText => {
    if (!creditsText) {
        return "";
    }
    return `
## Credits

${creditsText}
`
};

const generateFeatures = featuresText => {
    if (!featuresText) {
        return "";
    }
    return `
## Credits

${featuresText}
`
};

const generateTable = (yesCredits, yesFeatures) => {
    if (!yesCredits && yesFeatures) {
        return `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Test](#tests)
* [Questions](#questions)
`;
    }
    else if (!yesFeatures && yesCredits) {
        return `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Test](#tests)
* [Questions](#questions)
`;
    }
    else if (yesFeatures && yesCredits) {
        return `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Test](#tests)
* [Questions](#questions)
`;
    }
    else {
        return `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#tests)
* [Questions](#questions)
`;
    };
};

const generateMarkdown = data => {
    return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Description

${data.description}

${generateTable(data.credits, data.features)}

## Installation

${data.installation}

## Usage

${data.usage}

${generateCredits(data.credits)}

## License

${data.license}

${generateFeatures(data.features)}

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