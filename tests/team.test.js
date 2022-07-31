const Team = require("../lib/team");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

describe("Team Class", () => {
    describe("addMember method", () => {
        it("should add objects to the array of team members found in the team object", () => {
            const team = new Team();

            const manager = new Manager('Jeff Winger', 1, 'wingman@gmail.com', 4);
            const engineer = new Engineer('Annie Edison', 2, 'aedison82@gmail.com', 'aedison82');
            const intern = new Intern('Garrett Lambert', 3, 'garretlambert@gmail.com', 'Greendale Community College');
            
            team.addMember(manager);
            team.addMember(engineer);
            team.addMember(intern);

            expect(team.teamMembers.length).toEqual(3);
            expect(team.teamMembers[0]).toBe(manager);
            expect(team.teamMembers[1]).toBe(engineer);
            expect(team.teamMembers[2]).toBe(intern);
        });
    });
    
});