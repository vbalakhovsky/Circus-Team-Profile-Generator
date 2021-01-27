const Magician = require("../Magician");

test('Can add signatureTrick name with constructor ', () => {
    const testsignatureTrick = "The Wandering Circus signatureTrick of Oz";
    const testArtist = new Magician("Sammy", "Genious Juggler", testsignatureTrick);
    expect(testArtist.signatureTrick).toBe(testsignatureTrick);
});

test("If retrieveRole is called should return magician", ()=>{

const testRole = "Magician";
const testArtist = new Magician("Sammy", "Genious Juggler", "sammy@circus.com");
expect(testArtist.retrieveRole()).toBe(testRole);

});


test("Can retrieve the signatureTrick of the artist by calling retrievesignatureTrick()", ()=>{

const testsignatureTrick = "New York Talent Inc";
const testArtist = new Magician("Sammy", "Genious Juggler", testsignatureTrick);
expect(testArtist.retrievesignatureTrick()).toBe(testsignatureTrick);


})