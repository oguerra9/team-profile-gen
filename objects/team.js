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

Team.prototype.getHTML = function() {
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

        var memberHTML = `
            <div class='col mb-4 d-flex justify-content-center'>
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-body" style="color: white; background-color: blue;">
                        <h3 class="card-title">${member.name}</h5>
                        <h4 class="card-title mb-0"><img src="./assets/intern_icon.png" style="color:white; background-color:white;">   ${member.type}</h5>
                    </div>
                    <div class="card-body" style="background-color: rgb(179, 179, 179);">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${member.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.email}" target="_blank" rel="noopener noreferrer">${member.email}</a></li>
                            `;
        if (member instanceof Engineer) {
            memberHTML += `<li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank" rel="noopener noreferrer">${this.github}</a></li>`;
        }
        if (member instanceof Intern) {
            memberHTML += `<li class="list-group-item">School: ${this.school}</li>`;
        }
        if (member instanceof Manager) {
            memberHTML += `<li class="list-group-item">Office Number: ${this.officeNumber}</li>`;
        }
        memberHTML +=`
                        </ul>
                    </div>
                </div>
            </div>
            `;

        html += memberHTML;
    }
    html += `
            </div>
        </div>
        </body>
        </html>`;
        
    return html;
}

module.exports = Team;