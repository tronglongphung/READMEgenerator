const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = (answers) =>
  ` # ${answers.title}
## Description
  ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)    
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributing
${answers.contributing}
## Tests
${answers.test}
## Questions
Any questions, please contact ${answers.email} or ${answers.github} on GitHub.
## License
${answers.license}
`;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the Title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be use for installation?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be use to run the test?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How to contribute?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email address.",
    },
    {
      type: "list",
      name: "license",
      message: "Which license are you after?",
      choices: [
        {
          name: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
          name: "Apache",
          value:
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        },
        {
          name: "GPL",
          value:
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        },
      ],
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateREADME(answers);

    fs.writeFile("README.md", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created a README.md")
    );
  });
