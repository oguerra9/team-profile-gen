const Employee = require("lib\employee.js");
const Manager = require("lib\manager.js");
const Engineer = require("lib\engineer.js");
const Intern = require("lib\intern.js");

describe ("Employee Class", () => {
    describe("getName method", () => {
        it("should return the employee's name", () => {
            const name = 'Jane Doe';
            const employee = new Employee(name, 1, 'janedoe@gmail.com');

            const empName = employee.getName();

            expect(empName.toEqual(name));
        });
    });
    describe("getId method", () => {
        it("should return the employee's ID", () => {
            const id = 12;
            const employee = new Employee('Jane Doe', id, 'janedoe@gmail.com');

            const empId = employee.getId();

            expect(empId.toEqual(id));
        });
    });
    describe("getEmail method", () => {
        it("should return the employee's email", () => {
            const email = 'janedoe@gmail.com';
            const employee = new Employee('Jane Doe', 12, email);

            const empEmail = employee.getEmail();

            expect(empEmail.toEqual(email));
        });
    });
    describe("getRole method", () => {
        it("should return the employee's role", () => {
            const role = 'Employee'
            const employee = new Employee('Jane Does', 12, 'janedoe@gmail.com');

            const empRole = employee.getRole();

            expect(empRole.toEqual(role));
        });
    });
});