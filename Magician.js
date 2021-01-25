const CircusArtist = require("./CircusArtist");

class Magician extends CircusArtist {

    constructor(name, stageName, email, signatureTrick){

        super(name, stageName, email);
        this.signatureTrick = signatureTrick
    }

    retrieveRole(){

return "Magician";

    }

    retreiveSignatureTrick(){

        return this.signatureTrick
    }

}

module.exports = Magician;