const Engineer = require("../Engineer");

test('Can add GitHub username name with constructor ', () => {
    const testGit = "sammmyGit";
    const testArtist = new Engineer("Sammy", 7, "test@team.com", testGit);
    expect(testArtist.git).toBe(testGit);
});

test("If retrieveRole is called should return Engineer", ()=>{

const testRole = "Engineer";
const testArtist = new Engineer("Sammy", 7, "test@team.com", "sammyGit");
expect(testArtist.retrieveRole()).toBe(testRole);

});


test("Can retrieve the GitHub username of the engineer by calling retrieveGit()", ()=>{

const testGit = "sammigituser";
const testArtist = new Engineer("Sammy", 7, "test@team.com", testGit);
expect(testArtist.retreiveGit()).toBe(testGit);


})