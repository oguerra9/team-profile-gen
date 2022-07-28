function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}

Manager.prototype.getHTML = function () {
    return `
    <div class='col mb-4 d-flex justify-content-center'>
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body" style="color: white; background-color: blue;">
                <h3 class="card-title">${this.name}</h5>
                <h4 class="card-title mb-0"><img src="./assets/manager_icon.png" style="color:white; background-color:white;">   Manager</h5>
            </div>
            <div class="card-body" style="background-color: rgb(179, 179, 179);">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${this.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${this.email}" target="_blank" rel="noopener noreferrer">${this.email}</a></li>
                    <li class="list-group-item">Office Number: ${this.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
        `;
}

module.exports = Manager;