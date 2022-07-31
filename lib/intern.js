const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
    getHTML() {
        var html = super.getHTML();
        html += `<li class="list-group-item">School: ${this.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        return html;
    }
}

module.exports = Intern;



//********************************************************** */
// //intern’s name, ID, email, and school
// function Intern(name, id, email, school) {
//     this.type = 'Intern';
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;
// }

// module.exports = Intern;