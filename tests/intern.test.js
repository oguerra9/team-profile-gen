const Intern = require("lib\intern.js");

describe("Intern Class", () => {
    describe("getSchool method", () => {
        it("should return the intern's school", () => {
            const school = 'Auburn University';
            const intern = new Intern('John Doe', 5, 'johndoe@gmail.com', school);

            const internSchool = intern.getSchool();

            expect(internSchool).toEqual(school);
        });
    });
    describe("getRole method", () => {
        it("should return 'Intern'", () => {
            const role = 'Intern';
            const intern = new Intern('John Doe', 5, 'johndoe@gmail.com', 'Auburn University');

            const internRole = intern.getRole();

            expect(internRole).toEqual(role);
        });
    });
});