const Engineer = require("lib\engineer.js");

describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("should return the engineer's github username", () => {
            const github = 'janedoe82';
            const engineer = new Engineer('Jane Doe', 6, 'janedoe82@gmail.com', github);

            const engGithub = engineer.getGithub();

            expect(engGithub).toEqual(github);
        });
    });
    describe("getRole method", () => {
        it("should return 'Engineer'", () => {
            const role = 'Engineer';
            const engineer = new Engineer('Jane Doe', 6, 'janedoe82@gmail.com', 'janedoe82');

            const engRole = engineer.getRole();

            expect(engRole).toEqual(role);
        });
    });
});