//engineer’s name, ID, email, and GitHub username

function Engineer(name, id, email, github) {
    this.type = 'Engineer';
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

module.exports = Engineer;