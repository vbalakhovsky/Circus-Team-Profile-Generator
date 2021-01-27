

const CircusArtist = require("../CircusArtist");

describe("CircusArtist", ()=>{
    it("Can create a new instance of Circus Artist", ()=>{
const testArtist = new CircusArtist();
expect(typeof(testArtist).toBe("Object"));

});

it("Will add the name with the constructor", ()=>{

const name = "Ragramore";
const testArtist = new CircusArtist(name);
expect(testArtist.name).toBe(name);

});

it("Will add the Stage Name with the constructor", ()=>{

const testStageName = "The Greatest Entertainer of our Times";
const testArtist = new CircusArtist("Roaring Tiger", testStageName);
expect(testArtist.stageName).toBe(testStageName);

});

it("Will add the email of the new cast member with the constructor", ()=>{

const testEmail = "test@Circus.com";
const testArtist = new CircusArtist("Peerless Cannon Ball Lady", testEmail);
expect(testArtist.email).toBe(testEmail);

});

describe("retrieveName", ()=>{
it("Retrieves the name of the artist using retrieveName()", ()=>{
const testName = "Sheherezade";
const testArtist = new CircusArtist(testName);
expect(testArtist.retrieveName()).toBe(testName);


    });
});

describe("retrieveStageName", ()=>{
it("Retrieves the Stage Name of the cast member using retrieveStageName()", ()=>{
const testStageName = "Flying Fox";
const testArtist = new CircusArtist("Sheherzade", testStageName);
expect(testArtist.retrieveStageName()).toBe(testStageName);

    });

});

describe("retrieveEmail", ()=>{
it("Retrieves the email address of the cast member using retrieveEmail()", ()=>{
const testEmail = "test@circus.com";
const testArtist = new CircusArtist("Sheherzade", "The Flying Fox", testEmail);
expect(testArtist.retrieveEmail()).toBe(testEmail);

    });

});

describe("retrieveRole", ()=>{
    it("Retrieves full CircusArtist Object by using retrieveRole()", ()=>{
const testRole = "CircusArtist";
const testArtist = new CircusArtist ("Sheherezade", "The Flying Fox", "test@circus.com");
expect(testArtist.retrieveRole()).toBe(testRole);
        });
    });
});