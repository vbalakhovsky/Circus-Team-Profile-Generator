const Acrobat = require("../Acrobat");

test('Can add agent name with constructor ', () => {
    const testagent = "The Wandering Circus agent of Oz";
    const testArtist = new Acrobat("Sammy", "Genious Juggler", testagent);
    expect(testArtist.agent).toBe(testagent);
});

test("If retrieveRole is called should return Acrobat", ()=>{

const testRole = "Acrobat";
const testArtist = new Acrobat("Sammy", "Genious Juggler", "sammy@circus.com");
expect(testArtist.retrieveRole()).toBe(testRole);

});


test("Can retrieve the agent of the artist by calling retrieveAgent()", ()=>{

const testagent = "New York Talent";
const testArtist = new Acrobat("Sammy", "Genious Juggler", testagent);
expect(testArtist.retrieveAgent()).toBe(testagent);


})