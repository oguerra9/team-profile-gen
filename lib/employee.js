// const Engineer = require("./engineer");
// const Intern = require("./intern");
// const Manager = require("./manager");


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }

    getHTML() {
        return `
        <div class='col mb-4 d-flex justify-content-center'>
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body" style="color: white; background-color: blue;">
                    <h3 class="card-title">${this.getName()}</h5>
                    <h4 class="card-title mb-0"><img src="./assets/intern_icon.png" style="color:white; background-color:white;">   ${this.getRole()}</h5>
                </div>
                <div class="card-body" style="background-color: rgb(179, 179, 179);">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}" target="_blank" rel="noopener noreferrer">${this.getEmail()}</a></li>
                        `;
    }
}

module.exports = Employee;


//******************************* */

// function Employee(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
// }

// Employee.prototype.getName = function() {
//     return this.name;
// }

// Employee.prototype.getId = function() {
//     return this.id;
// }

// Employee.prototype.getEmail = function() {
//     return this.email;
// }

// Employee.prototype.getRole = function() {
//     return 'Employee';
// }

// module.exports = Employee;