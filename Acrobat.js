const CircusArtist = require("./CircusArtist");

class Acrobat extends CircusArtist {

constructor (name, stageName, email, agent){

    super(name, stageName, email);
    this.agent = agent;

}
retrieveRole(){

    return "Acrobat"

}
retrieveAgent(){
return this.agent

}
}
module.exports = Acrobat;