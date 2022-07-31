const Manager = require("lib\manager.js");

describe("Manager class", () => {
    describe("getOffice method", () => {
        it("should return the manager's office number", () => {
            const officeNumber = 4;
            const manager = new Manager('John Smith', 1, 'johnsmith@gmail.com', officeNumber);

            const managerOffice = manager.getOffice();

            expect(managerOffice).toEqual(officeNumber);
        });
    });
    describe("getRole method", () => {
        it("should return 'Manager'", () => {
            const role = 'Manager';
            const manager = new Manager('John Smith', 1, 'johnsmith@gmail.com', 4);

            const managerRole = manager.getRole();

            expect(managerRole).toEqual(role);
        });
    });
});