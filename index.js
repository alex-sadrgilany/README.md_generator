// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const {writeFile} = require("./utils/generateMarkdown");
const generateReadme = require("./src/markdownTemplate");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:"
    },
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project (Required):",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("Your Title cannot be blank!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description about your project:"
    },
    {
        type: "list",
        name: "license",
        message: "Please select an appropriate license for your project:",
        choices: [
            "Apache 2.0",
            "GNU GPL 3.0",
            "MIT",
            "Mozilla 2.0",
            "Open/No License"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter instructions on how to install your project:" 
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter instructions on how to test your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter information on how to use your project:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter guidelines for developers wanting to contribute to your project:"
    },
    {
        type: "input",
        name: "features",
        message: "Please list your project's features:"
    },
    {
        type: "input",
        name: "credits",
        message: "Please list your collaborators, if any, with their GitHub links:"
    }
];
// welcome message for the user once they run the application
const welcome = () => {
    console.log('\x1b[36m', `                   
    This application serves as a README.md generator based on your input. 
    Please note: if you enter nothing for a response, that section will be omitted entirely.`)
};

// prompt function
const promptUser = () => {
    welcome();
    return inquirer.prompt(questions);
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then(answers => {
        return generateReadme(answers);
    })
    .then(markdown => {
        return writeFile(markdown);
    })
    .then(writeFileResponse => {
        console.log('\x1b[32m', writeFileResponse.message),
        '\n';
        console.log('\x1b[36m', "You can find your new README.md in the 'dist' folder!"),
        '\n',
        console.log(" Please remember to add your legal name to the license section!");
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();


