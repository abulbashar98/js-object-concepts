const student = {
    nname: 'Abul Bashar',
    id: 101,
    age: 24,
    balance: 1500000,
    migrated: false,
    currentBallance: function (tutionFee, livingCost) {
        this.balance = this.balance - tutionFee - livingCost;
        console.log('from here', this)
        return this.balance;
    }
}

student.currentBallance(300000, 75000);   //=====> 1125000
/*=======>
from here {                                         // from line no: 9
  name: 'Abul Bashar',
  id: 101,
  age: 24,
  balance: 1125000,
  migrated: false,
  currentBallance: [Function: currentBallance]
}
/*






/* NOTE:-
We already know what a Method is, Method is a function as a value of a key in an Object....
So, to use a method like we can use other Properties of an Object using a Super class as a parent of extended Object, a shortcut system is to use Bind function or Method..

What bind actually does:- Bind uses a method from another object... How???

Description:- Normally when we use (this.) in a Method of an Object it captures the properties of that Object using prototypical inheritance(mayB)......Common sense......

Basically what bind does is, it replaces {this.} properties of the Object we impose bind to, with properties of the Object we are binding to the parent type method.....
*/





const student2 = {
    name: 'Naymur Rahman Nabil',
    id: 102,
    age: 25,
    balance: 2500000,
    migrated: true
}


const currentBallanceForNabil = student.currentBallance.bind(student2)
currentBallanceForNabil(500000, 150000);  //====> 1850000


/*=====>
from here {                                        from line 9
  name: 'Naymur Rahman Nabil',
  id: 102,
  age: 25,
  balance: 1850000,
  migrated: true
}
*/





const student3 = {
    name: 'Abu Naim Heera',
    id: 102,
    age: 25,
    balance: 5000000,
    migrated: true
}

const currentBallanceForHeera = student.currentBallance.bind(student3)
currentBallanceForHeera(0, 1500000);   //====>3500000

/*=====>                                              
from here {                             from line 9
  name: 'Abu Naim Heera',
  id: 102,
  age: 25,
  balance: 3500000,
  migrated: true
}
*/