const Understudy = require("../Understudy");

test('Can add school name with constructor ', () => {
    const testSchool = "The Wandering Circus School of Oz";
    const testArtist = new Understudy("Sammy", "Genious Juggler", testSchool);
    expect(testArtist.school).toBe(testSchool);
});

test("If retrieveRole is called should return Understudy", ()=>{

const testRole = "Understudy";
const testArtist = new Understudy("Sammy", "Genious Juggler", "sammy@circus.com");
expect(testArtist.retrieveRole()).toBe(testRole);

});


test("Can retrieve the schooi of the artist by calling retrieveSchool()", ()=>{

const testSchool = "Moscow Art Theatre School";
const testArtist = new Understudy("Sammy", "Genious Juggler", testSchool);
expect(testArtist.retrieveSchool()).toBe(testSchool);


})
