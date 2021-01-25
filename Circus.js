const inquirer = require("inquirer");
const fs = require ("fs");
const Magician = require("./Magician");
const Acrobat = require("./Acrobat");
const Understudy = require("./Understudy");

const cast = [];

function initCircus() {
startHtml();
addArtist();
}

function addArtist(){

inquirer.prompt([{
message: "Enter Artist's Name:  ",
name: "name"
},

{ type: "list",
 message: "Select role in the show:  ",
 choices: [
"Magician",
"Acrobat",
"Understudy"

 ],
 name: "role"

 },
 {
     message: "Enter actor's stage name:  ",
     name: "stageName"
 },
 {
   message: "Enter actor's email address:   ",
   name: "email"

 }])
 .then(function({name, role, stageName, email}){

    let roleSpec = "";
    if(role==="Magician") {

        roleSpec = "Signature Trick";

    } else if (role === "Acrobat"){
        roleSpec = "Agent's name";
    } else {
        roleSpec = "Actor school name";
    }

inquirer.prompt([{
message: `Enter actor's ${roleSpec}:  `,
name: "roleSpec"

},

{type: "list",
message: "Do you want to add more actors?",
choices: ["yes", "no"], 
name: "moreActors"
}]).then(function({roleSpec, moreActors})
{ 
    let newActor;
    if (role === "Magician")
    { newActor = new Magician(name, stageName, email, roleSpec);
    }else if (role === "Acrobat"){ newActor = new Acrobat(name, stageName, email, roleSpec)
    }else 
    {newActor = new Understudy( name, stageName, email, roleSpec);}

    cast.push(newActor);
    addHtml(newActor)
    .then(function(){
 if (moreActors ==="yes") {

    addArtist();
 } else { finishHtml();}

    });

});

});


}

function startHtml() {

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Circus Cast</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Circus Artists</span>
        </nav>
        <div class="container">
            <div class="row">`;

            fs.writeFile("circus.html", html, function(err){

                if(err){console.log(err);}
            });
            console.log("Allez Hop!");

}

function addHtml(performer) {

return new Promise (function(resolve, reject){

    const name = performer.retrieveName();
    const role = performer.retrieveRole();
    const stageName = performer.retrieveStageName();
    const email = performer.retrieveEmail();
    let data = "";

    if(role === "Magician" ) {

        const signatureTrick = performer.retreiveSignatureTrick();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Magician</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Stage Name: ${stageName}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Famous for: ${signatureTrick}</li>
        </ul>
        </div>
    </div>`;
    } else if (role === "Acrobat"){
        const agent = performer.retrieveAgent();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Magician</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Stage Name: ${stageName}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Represented by: ${agent}</li>
        </ul>
        </div>
    </div>`;
    } else  {
        const school  = performer.retrieveSchool();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Magician</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Stage Name: ${stageName}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Graduate of: ${school}</li>
        </ul>
        </div>
    </div>`

    }

    console.log("Casting");
    fs.appendFile("./circus.html", data, function(err){
        if(err){

            return reject(err);
        };
        return resolve();
    });
  
});

}


function finishHtml() {

    const html = `</div>
    </div>
    </body>
    </html>`;
    fs.appendFile("circus.html", html, function(err){
        if(err){console.log(err);
        };
    });
    console.log("Curtain!");
}
initCircus();