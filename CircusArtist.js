class CircusArtist {
constructor(name, stageName, email)
{ this.name = name;
    this.stageName = stageName;
    this.email = email;


}

retrieveName() {
return this.name;

}

retrieveStageName() {

    return this.stageName;

}
 retrieveEmail() {

    return this.email;
 }

retrieveRole() {

    return "CircusArtist";
}

}

module.exports = CircusArtist;