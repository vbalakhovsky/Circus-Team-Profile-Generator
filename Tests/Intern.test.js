const Intern = require("../Intern");

test('Can add school name with constructor ', () => {
    const testSchool = "The Wandering Circus School of Oz";
    const testArtist = new Intern("Sammy", 43593784509378, "test@loloo.com", testSchool);
    expect(testArtist.school).toBe(testSchool);
});

test("If retrieveRole is called, should return Intern", ()=>{

const testRole = "Intern";
const testArtist = new Intern("Sammy", 43593784509378, "sammy@circus.com", "The Wandering Circus School of Oz");
expect(testArtist.retrieveRole()).toBe(testRole);

});


test("Can retrieve the schooi of the Intern by calling retrieveSchool()", ()=>{

const testSchool = "Moscow Art Theatre School";
const testArtist = new Intern("Sammy", 67676767, "sammu@ththth.com", testSchool);
expect(testArtist.retrieveSchool()).toBe(testSchool);


})
