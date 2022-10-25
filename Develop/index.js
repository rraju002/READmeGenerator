// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter a title for your README file:' ,
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your README file:' ,
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions:' ,
        name: 'instalation'
    },
    {
        type: 'input',
        message: 'Enter the usage for your project:' ,
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Select the license you would like to use for your project:' ,
        choices: ['MIT License', 'GNU GPL v2', 'GNU GPL v3', 'Apache License 2.0', 'BSD 3-Clause'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter contribution instructions for the project:' ,
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please provide test instructions for the project:' ,
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:' ,
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email address:' ,
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
