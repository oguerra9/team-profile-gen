const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Team = require("./lib/team");

const fs = require('fs');
const inquirer = require('inquirer');

let team = new Team();

// checks that the user's input contains characteristics of a valid email address
const validateEmail = async (email) => {
    if (email.includes('@') && email.includes('.')) {
        return true;
    }
    else {
        return "Please enter a valid email...";
    }
};

//ask user for the team manager’s name, employee ID, email address, and office number
const managerInfo = () => {
    inquirer
    .prompt ([
    {
        type: 'input',
        message: 'Team manager name: ',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'employeeID',
    },
    {
        type: 'input',
        message: 'Email Address: ',
        name: 'email',
        validate: validateEmail, // uses the validateEmail function to check that the user's input is a valid email
    },
    {
        type: 'input',
        message: 'Office Number: ',
        name: 'officeNumber',
    }
    ])
    .then((data) => {
        // once the user has finished entering the team manager's information, the user's answers are used to create a new manager object
        const manager = new Manager(data.managerName, data.employeeID, data.email, data.officeNumber)
        // the manager object is then added to the team object using the class's '.addMember(employee)' method
        team.addMember(manager)
        // the menu function is then called to allow the user to choose what they would like to do next
        menu()
    })

};
managerInfo();
//the menu is displayed after each team member is added 
const menu = () => {
    inquirer
    .prompt ([
        { // add an engineer, add an intern, finish building my team
            type: 'list',
            message: 'What would you like to do with your team?',
            choices: ['add an engineer','add an intern','finish building my team'],
            name: 'selection',
        }
    ])
    .then ((response) => { 
        if (response.selection == 'add an engineer') {
            addEngineer() //calls function containing prompt for engineer's information to create new Engineer object
        }
        if (response.selection == 'add an intern') {
            console.log('addIntern called') //calls function containing prompt for intern's information to create new Intern object
            addIntern()
        }
        if (response.selection == 'finish building my team') {
            finishTeam() //calls function to finish building team
        }
    })
};

const addEngineer = () => {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Engineer\'s Name: ',
            name: 'engName',
        },
        {
            type: 'input',
            message: 'Engineer\'s ID: ',
            name: 'engID',
        },
        {
            type: 'input',
            message: 'Engineer\'s Email: ',
            name: 'engEmail',
            validate: validateEmail,
        },
        {
            type: 'input',
            message: 'Engineer\'s GitHub Username: ',
            name: 'engGitUser',
        }
    ])
    .then ((data) => { //creates a new Engineer object with gathered info, adds engineer to the team and displays the menu
        const engineer = new Engineer(data.engName, data.engID, data.engEmail, data.engGitUser)
        team.addMember(engineer) 
        menu()
    })
};

const addIntern = () => {
    inquirer //prompt to gather info for a new intern object
    .prompt ([
        {
            type: 'input',
            message:'Intern\'s Name: ',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'Intern\'s ID: ',
            name: 'internID',
        },
        {
            type: 'input',
            message: 'Intern\'s Email: ',
            name: 'internEmail',
            validate: validateEmail,
        },
        {
            type: 'input',
            message: 'Intern\'s School: ',
            name: 'internSchool',
        }
    ])
    .then ((data) => { //creates new intern object from information gathered and adds intern object to team
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
        team.addMember(intern);
        menu()
    })
};

const finishTeam = () => {
    console.log('finishing team...');
    //gets html from the team's getHTML() method
    let teamHTML = team.getHTML();
    //creates or writes over the file 'index.html' with the generated html 
    fs.writeFile('index.html', teamHTML, (err) =>
    err ? console.log(err) : console.log('Team Profile page created successfully'))
};
