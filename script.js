const inquirer = require('inquirer');
//team manager’s name, employee ID, email address, and office number
const memberInfo = () => {
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
    },
    {
        type: 'input',
        message: 'Office Number: ',
        name: 'officeNumber',
    }
    ])

};

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
    .then (response)
        if (response == 'add an engineer') {
            addEngineer();
        }
        if (response == 'add an intern') {
            addIntern();
        }
        if (response == 'finish building my team') {
            finishTeam();
        }
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
        },
        {
            type: 'input',
            message: 'Engineer\'s GitHub Username: ',
            name: 'engGitUser',
        }
    ])
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
        },
        {
            type: 'input',
            message: 'Intern\'s School: ',
            name: 'internSchool',
        }
    ])
};

const finishTeam = () => {
    //create team
    //generate HTML
    const htmlSheet = ' ';
}