// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const {writeFile} = require("./utils/generateMarkdown");
const generateReadme = require("./src/markdownTemplate");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title of your Project? (Required):",
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
        type: "input",
        name: "installation",
        message: "Please enter instructions on how to install your project:" 
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter information on how to use your project:"
    },
    {
        type: "confirm",
        name: "confirmCredits",
        message: "Would you like your README.md to include a Credits Section?",
        default: true
    },
    {
        type: "input",
        name: "credits",
        message: "Please list your collaborators with their GitHub links:",
        when: ({confirmCredits}) => {
            if (confirmCredits) {
                return true;
            }
            else {
                return false;
            }
        }
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
        type: "confirm",
        name: "confirmFeatures",
        message: "Would you like your README.md to include a Features Section?",
        default: true
    },
    {
        type: "input",
        name: "features",
        message: "Please list your project's features:",
        when: ({confirmFeatures}) => {
            if (confirmFeatures) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter guidelines for developers wanting to contribute to your project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter instructions on how to test your project:"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:"
    }
];

const promptUser = () => {
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
        console.log(writeFileResponse),
        '\n',
        console.log("You can find your new README.md in the 'dist' folder!"),
        '\n',
<<<<<<< HEAD
        console.log("Please remember to add your legal name to the license section!")
=======
        console.log("Please remember to add your legal name to the license section!");
>>>>>>> license_badge
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();


