const Manager = require("../Manager");

test('Can add office number with constructor ', () => {
    const testNumber = 124556778888;
    const testArtist = new Manager("Sammy", 7777777, "test@team.com", testNumber);
    expect(testArtist.officeNumber).toBe(testNumber);
});

test("If retrieveRole is called should return Manager", ()=>{

const testRole = "Manager";
const testArtist = new Manager("Sammy", 7777777, "sammy@circus.com", 124556778888);
expect(testArtist.retrieveRole()).toBe(testRole);

});


test("Can retrieve the office number of the manager by calling retrieveOfficeNumber()", ()=>{

const testNumber = 124556778888;
const testArtist = new Manager("Sammy", 7777777,"sammy@circus.com", testNumber);
expect(testArtist.retrieveOfficeNumber()).toBe(testNumber);


})