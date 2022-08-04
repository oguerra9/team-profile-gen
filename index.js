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

const menu = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            message: 'What would you like to do with your team?',
            choices: ['add an engineer','add an intern','finish building my team'],
            name: 'selection',
        }
    ])
    .then ((response) => { 
        if (response.selection == 'add an engineer') {
            addEngineer()
        }
        if (response.selection == 'add an intern') {
            console.log('addIntern called')
            addIntern()
        }
        if (response.selection == 'finish building my team') {
            finishTeam()
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
    .then ((data) => {
        const engineer = new Engineer(data.engName, data.engID, data.engEmail, data.engGitUser)
        team.addMember(engineer)
        menu()
    })
};

const addIntern = () => {
    inquirer
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
    .then ((data) => {
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
        team.addMember(intern);
        menu()
    })
};

const finishTeam = () => {
    console.log('finishing team...');

    let teamHTML = team.getHTML();

    fs.writeFile('demo.html', teamHTML, (err) =>
    err ? console.log(err) : console.log('Team Profile page created successfully'))
};
