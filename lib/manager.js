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

