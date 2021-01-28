

const Employee = require("../Employee");

describe("Employee", ()=>{
    it("Can create a new instance of Employee", ()=>{
const testArtist = new Employee();
expect(typeof(testArtist).toBe("Object"));

});

it("Will add the name with the constructor", ()=>{

const name = "Ragramore";
const testArtist = new Employee(name);
expect(testArtist.name).toBe(name);

});

it("Will add the ID with the constructor", ()=>{

const testId = "878787878787";
const testArtist = new Employee("Roaring Tiger", testId);
expect(testArtist.stageName).toBe(testId);

});

it("Will add the email of the new cast member with the constructor", ()=>{

const testEmail = "test@Circus.com";
const testArtist = new Employee("Peerless Cannon Ball Lady", testEmail);
expect(testArtist.email).toBe(testEmail);

});

describe("retrieveName", ()=>{
it("Retrieves the name of the artist using retrieveName()", ()=>{
const testName = "Sheherezade";
const testArtist = new Employee(testName);
expect(testArtist.retrieveName()).toBe(testName);


    });
});

describe("retrieveId", ()=>{
it("Retrieves the ID of the team member using retrieveId()", ()=>{
const testId = "8754348753098";
const testArtist = new Employee("Sheherzade", testId);
expect(testArtist.retrieveId()).toBe(testId);

    });

});

describe("retrieveEmail", ()=>{
it("Retrieves the email address of the team member using retrieveEmail()", ()=>{
const testEmail = "test@circus.com";
const testArtist = new Employee("Sheherzade", "The Flying Fox", testEmail);
expect(testArtist.retrieveEmail()).toBe(testEmail);

    });

});

describe("retrieveRole", ()=>{
    it("Retrieves full Employee Object by using retrieveRole()", ()=>{
const testRole = "Employee";
const testArtist = new Employee ("Sheherezade", "987509870978", "test@circus.com");
expect(testArtist.retrieveRole()).toBe(testRole);
        });
    });
});