const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

class Team {
    constructor() {
        this.teamMembers = [];
    }

    addMember(member) {
        if (member instanceof Engineer === false && member instanceof Intern === false && member instanceof Manager === false) {
            throw new Error("Expected parameter 'member' to be instance of type Employee, Manager, Engineer, or Intern");
        }
    
        this.teamMembers.push(member);
    }

    getHTML() {
        var html = `
            <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>My Team</title>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                    </head>
                    
                    <body>
                        <h1 style="color:white; background-color: rgb(255, 67, 67);" class=" p-5 text-center fw-bold">My Team</h1>
                        <div class="d-flex justify-content-center">
                            <div class="team-members col-7 row row-cols-3 d-flex justify-content-center">
                                `;
        for (var i = 0; i < this.teamMembers.length; i++) {
            var member = this.teamMembers[i];
            html += member.getHTML();
        }
        html += `
                </div>
            </div>
            </body>
            </html>`;
                
        return html;
        
    }
}

module.exports = Team;

