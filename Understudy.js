const CircusArtist = require ("./CircusArtist");

class Understudy extends CircusArtist {

    constructor (name, stageName, email, school){
super (name, stageName, email);
this.school = school;

    }

    retrieveRole() {
        return "Understudy"
    }

    retrieveSchool(){
        return this.school;
    }

}

module.exports = Understudy;