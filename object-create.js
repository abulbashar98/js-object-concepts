// 1. Object Literal
const student = { name: 'Abul Bashar', age: 24, Nationality: 'Bangladeshi' }


// 2. Constructor
const team = new Object()
// console.log(team);                         //====> {}


// 3.

// const teamDetails = Object.create(null);
// console.log(teamDetails)                  //=======> [Object: null prototype] {}
const teamDetails = Object.create(student);
// console.log(teamDetails)                   //=====> {}   Note: Prototypical Inheritance
// console.log(teamDetails.Nationality          //=====> Bangladeshi



// 4.Class           Note: Syntactical sugar

class Group {


    constructor(name, members, task) {
        this.name = name;
        this.members = members;
        this.task = task;
    }
}
const bloom = new Group('bloom', 25, 'front-end-development')
console.log(bloom);

//====> Group { name: 'bloom', members: 25, task: 'front-end-development' }