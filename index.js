const inquirer = require("inquirer");
const fs = require ("fs");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

const cast = [];

function initTeam() {
startHtml();
addMember();
}

function addMember(){

inquirer.prompt([{
message: "Enter Team Memeber's Name:  ",
name: "name"
},

{ type: "list",
 message: "Select role on the team:  ",
 choices: [
"Engineer",
"Manager",
"Intern"

 ],
 name: "role"

 },
 {
     message: "Enter the team roster id:  ",
     name: "id"
 },
 {
   message: "Enter team memeber's email address:   ",
   name: "email"

 }])
 .then(function({name, role, id, email}){

    let roleSpec = "";
    if(role==="Engineer") {

        roleSpec = "GitHub User";

    } else if (role === "Manager"){
        roleSpec = "Office Number";
    } else {
        roleSpec = "School Name";
    }

inquirer.prompt([{
message: `Team Memeber's ${roleSpec}:  `,
name: "roleSpec"

},

{type: "list",
message: "Do you want to add more team members",
choices: ["yes", "no"], 
name: "moreMembers"
}]).then(function({roleSpec, moreMembers})
{ 
    let newMember;
    if (role === "Engineer")
    { newMember = new Engineer(name, id, email, roleSpec);
    }else if (role === "Manager"){ newMember = new Manager(name, id, email, roleSpec)
    }else 
    {newMember = new Intern( name, id, email, roleSpec);}

    cast.push(newMember);
    addHtml(newMember)
    .then(function(){
 if (moreMembers ==="yes") {

    addMember();
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
        <link rel="stylesheet" href="style.css">
        <title>Dream Team</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Dream Team</span>
        </nav>
        <div class="container">
            <div class="row">`;

            fs.writeFile("TeamRoster.html", html, function(err){

                if(err){console.log(err);}
            });
            console.log("Let's Build Our Team");

}

function addHtml(cog) {

return new Promise (function(resolve, reject){

    const name = cog.retrieveName();
    const role = cog.retrieveRole();
    const id = cog.retrieveId();
    const email = cog.retrieveEmail();
    let data = "";

    if(role === "Engineer" ) {

        const git = cog.retreiveGit();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Team Roster ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub Username: ${git}</li>
        </ul>
        </div>
    </div>`;
    } else if (role === "Manager"){
        const officeNumber = cog.retrieveOfficeNumber();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Manager</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Team Roster ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
        </div>
    </div>`;
    } else  {
        const school  = cog.retrieveSchool();
        data = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h5 class="card-header">${name}<br /><br />Intern</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Team Roster ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Graduate of: ${school}</li>
        </ul>
        </div>
    </div>`

    }

    console.log("Team creation continued");
    fs.appendFile("./TeamRoster.html", data, function(err){
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
    fs.appendFile("TeamRoster.html", html, function(err){
        if(err){console.log(err);
        };
    });
    console.log("The Team is Created");
}
initTeam();