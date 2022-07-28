const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

function Team() {
    this.teamMembers = [];
}

Team.prototype.addMember = function(member) {
    if (member instanceof Engineer === false && member instanceof Intern === false && member instanceof Manager === false) {
        throw new Error("Expected parameter 'member' to be instance of either Engineer or Intern");
    }

    this.teamMembers.push(member);
}

module.exports = Team;