class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // returns the employee's name
        return this.name;
    }
    getId() {
        // returns the employee's id
        return this.id;
    }
    getEmail() {
        // returns the employee's email
        return this.email;
    }
    getRole() {
        // returns the employee's role
        return 'Employee';
    }

    getHTML() {
        // the beginning of the html code needed to display any kind of employee's 
        return `
        <div class='col mb-4 d-flex justify-content-center'>
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body" style="color: white; background-color: blue;">
                    <h3 class="card-title">${this.getName()}</h5>
                    <h4 class="card-title mb-0"><img src="./assets/icons/${this.getRole()}_icon.png" style="color:white; background-color:white;">   ${this.getRole()}</h5>
                </div>
                <div class="card-body" style="background-color: rgb(179, 179, 179);">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${this.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}" target="_blank" rel="noopener noreferrer">${this.getEmail()}</a></li>
                        `;
    }
}

module.exports = Employee;


