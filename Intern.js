const Employee = require ("./Employee");

class Intern extends Employee {

    constructor (name, id, email, school){
super (name, id, email);
this.school = school;

    }

    retrieveRole() {
        return "Intern"
    }

    retrieveSchool(){
        return this.school;
    }

}

module.exports = Intern;