

const Employee = require("../Employee");

describe("Employee", ()=>{
    it("Can create a new instance of Employee", ()=>{
const testArtist = new Employee();
expect(typeof(testArtist)).toBe("object");

});

it("Will add the name with the constructor", ()=>{

const name = "John";
const testArtist = new Employee(name);
expect(testArtist.name).toBe(name);

});

it("Will add the ID with the constructor", ()=>{

const testId = 878787878787;
const testArtist = new Employee("John", testId);
expect(testArtist.id).toBe(testId);

});

it("Will add the email of the new cast member with the constructor", ()=>{

const testEmail = "test@Circus.com";
const testArtist = new Employee("John", 1, testEmail);
expect(testArtist.email).toBe(testEmail);

});

describe("retrieveName", ()=>{
it("Retrieves the name of the artist using retrieveName()", ()=>{
const testName = "John";
const testArtist = new Employee(testName);
expect(testArtist.retrieveName()).toBe(testName);


    });
});

describe("retrieveId", ()=>{
it("Retrieves the ID of the team member using retrieveId()", ()=>{
const testId = 8754348753098;
const testArtist = new Employee("Sheherzade", testId);
expect(testArtist.retrieveId()).toBe(testId);

    });

});

describe("retrieveEmail", ()=>{
it("Retrieves the email address of the team member using retrieveEmail()", ()=>{
const testEmail = "test@circus.com";
const testArtist = new Employee("John", 7, testEmail);
expect(testArtist.retrieveEmail()).toBe(testEmail);

    });

});

describe("retrieveRole", ()=>{
    it("Retrieves full Employee Object by using retrieveRole()", ()=>{
const testRole = "Employee";
const testArtist = new Employee ("JOhn", 987509870978, "test@circus.com");
expect(testArtist.retrieveRole()).toBe(testRole);
        });
    });
});