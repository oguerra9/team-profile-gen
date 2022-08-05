const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
    getHTML() {
        var html = super.getHTML();
        // adds the html statements specific to the adds the 'GitHub:' line to
        html += `<li class="list-group-item">GitHub: <a href="https://github.com/${this.getGithub()}" target="_blank" rel="noopener noreferrer">${this.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        return html;
    }
}

module.exports = Engineer;


//******************************************************** */
// //engineer’s name, ID, email, and GitHub username

// function Engineer(name, id, email, github) {
//     this.type = 'Engineer';
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.github = github;
// }

// module.exports = Engineer;