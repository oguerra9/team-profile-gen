const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getOffice() {
        return this.officeNumber;
    }
    getHTML() {
        var html = super.getHTML();
        html += `<li class="list-group-item">Office Number: ${this.getOffice()}</li>
                </ul>
                </div>
            </div>
        </div>
        `;
        return html;
    }
}

module.exports = Manager;


//******************************************* */
// function Manager(name, id, email, officeNumber) {
//     this.type = 'Manager';
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.officeNumber = officeNumber;
// }

// module.exports = Manager;