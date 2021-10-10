// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseText => {
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
const renderLicenseLink = licenseText => {
    if (licenseText = "Apache 2.0") {
        return `
[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)
`;
    }
    else if (licenseText = "GNU GPL 3.0") {
        return `
[GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0)
`;
    }
    else if (licenseText = "MIT") {
        return `
[MIT License](https://opensource.org/licenses/MIT)
`;
    }
    else if (licenseText = "Mozilla 2.0") {
        return `
[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)
`;
    }
    else if (licenseText = "Open/No License") {
        return "";
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseText => {
    if (licenseText = "Apache 2.0") {
        return `
Copyright ${new Date().getFullYear()} [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;
    }
    else if (licenseText = "GNU GPL 3.0") {
        return `
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
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;
    }
    else if (licenseText = "MIT") {
        return `
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
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;
    }
    else if (licenseText = "Mozilla 2.0") {
        return `
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.
`;
    }
    else if (licenseText = "Open/No License") {
        return "";
    };
};

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

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

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