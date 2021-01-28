const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, git){

        super(name, id, email);
        this.git = git
    }

    retrieveRole(){

return "Engineer";

    }

    retreiveGit(){

        return this.git
    }

}

module.exports = Engineer;