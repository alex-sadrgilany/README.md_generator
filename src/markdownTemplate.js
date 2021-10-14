// Global License Object that stores the proper return strings based on what license the user selects
const licenseObj = {
    badges: {
        apache:`
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
        gnu:`
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
        mit:`
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        mozilla:`
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    },
    links: {
        apache:`
[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`,
        gnu:`
[GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0)`,
        mit:`
[MIT License](https://opensource.org/licenses/MIT)`,
        mozilla:`
[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
    },
    blurbs: {
        apache:`
Copyright ${new Date().getFullYear()} [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
        gnu:`
<one line to give the program's name and a brief idea of what it does.>
Copyright (C) ${new Date().getFullYear()}  <name of author>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
        mit:`
Copyright ${new Date().getFullYear()} <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
        mozilla:`
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.`
    }  
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = licenseText => {
    let badge;
    switch (licenseText) {
        case "Apache 2.0":
            badge = licenseObj.badges.apache;
            break;
        case "GNU GPL 3.0":
            badge = licenseObj.badges.gnu;
            break;
        case "MIT":
            badge = licenseObj.badges.mit;
            break;
        case "Mozilla 2.0":
            badge = licenseObj.badges.mozilla;
            break;
        case "Open/No License":
            badge = "";
            break;
    }
    return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = licenseText => {
    let link;
    switch (licenseText) {
        case "Apache 2.0":
            link = licenseObj.links.apache;
            break;
        case "GNU GPL 3.0":
            link = licenseObj.links.gnu;
            break;
        case "MIT":
            link = licenseObj.links.mit;
            break;
        case "Mozilla 2.0":
            link = licenseObj.links.mozilla;
            break;
        case "Open/No License":
            link = "";
            break;
    }
    return link;
};

const renderLicenseWarning = licenseText => {
    let blurb;
    switch (licenseText) {
        case "Apache 2.0":
            blurb = licenseObj.blurbs.apache;
            break;
        case "GNU GPL 3.0":
            blurb = licenseObj.blurbs.gnu;
            break;
        case "MIT":
            blurb = licenseObj.blurbs.mit;
            break;
        case "Mozilla 2.0":
            blurb = licenseObj.blurbs.mozilla;
            break;
        case "Open/No License":
            blurb = "";
            break;
    }
    return blurb;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

const generateLicenseSection = licenseText => {
    if (licenseText == "Open/No License") {
        return "";
    }
    return `
## License

${renderLicenseLink(licenseText)}
${renderLicenseWarning(licenseText)}`
};

// The following functions all prepare for if the user enters nothing for a prompt. and if they do so it will be omitted from the readme.
const generateDescription = descriptionText => {
    if (descriptionText == "") {
        return "";
    }
    return `
## Description

${descriptionText}`
};

const generateInstallation = installationText => {
    if (installationText == "") {
        return "";
    }
    return `
## Installation

${installationText}`
};

const generateUsage = usageText => {
    if (usageText == "") {
        return "";
    }
    return `
## Usage

${usageText}`
};

// Create a function that returns a credits section if the user wanted one
const generateCredits = creditsText => {
    if (creditsText == "") {
        return "";
    }
    return `
## Credits

${creditsText}`
};

// Create a function that returns a features section if the user wanted one
const generateFeatures = featuresText => {
    if (featuresText == "") {
        return "";
    }
    return `
## Features

${featuresText}`
};

const generateContributing = contributingText => {
    if (contributingText == "") {
        return "";
    }
    return `
## Contributing

${contributingText}`
};

const generateTests = testsText => {
    if (testsText == "") {
        return "";
    }
    return `
## Tests

${testsText}`
};

const generateQuestions = (githubText, emailText) => {
    if (githubText == "" && emailText == "") {
        return "";
    }
    else if (githubText == "") {
        return `
## Questions

To reach me with questions, please email: ${emailText}
`
    }
    else if (emailText == "") {
        return `
## Questions

[My GitHub Profile](https://github.com/${githubText})
`
    }
    else {
        return `
## Questions

[My GitHub Profile](https://github.com/${githubText})

To reach me with questions, please email: ${emailText}
`
    };
};

// Create a function that returns a table of contents that matches the sections the user filled in the prompts
const generateTable = (
    installationText, usageText, creditsText, licenseText, featuresText, contributingText, testsText, githubText, emailText) => {
        var tableOfContents = `
## Table of Contents

`;
        if (!installationText == "") {
            tableOfContents += "* [Installation](#installation)" + '\n';
        }
        if (!usageText == "") {
            tableOfContents += "* [Usage](#usage)" + '\n';
        }
        if (!creditsText == "") {
            tableOfContents += "* [Credits](#credits)" + '\n';
        }
        if (!licenseText == "Open/No License") {
            tableOfContents += "* [License](#license)" + '\n';
        }
        if (!featuresText == "") {
            tableOfContents += "* [Features](#features)" + '\n';
        }
        if (!contributingText == "") {
            tableOfContents += "* [Contributing](#contributing)" + '\n';
        }
        if (!testsText == "") {
            tableOfContents += "* [Test](#tests)" + '\n';
        }
        if (!githubText == "" || !emailText == "") {
            tableOfContents += "* [Questions](#questions)";
        }
        return tableOfContents;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
    return `
${renderLicenseBadge(data.license)}
# ${data.title}

${generateDescription(data.description)}

${generateTable(data.installation, data.usage, data.credits, data.license, data.features, data.contributing, data.tests, data.github, data.email)}

${generateInstallation(data.installation)}

${generateUsage(data.usage)}

${generateCredits(data.credits)}

${generateLicenseSection(data.license)}

${generateFeatures(data.features)}

${generateContributing(data.contributing)}

${generateTests(data.tests)}

${generateQuestions(data.github, data.email)}
`
};

// export so it can be called on index.js
module.exports = generateMarkdown;