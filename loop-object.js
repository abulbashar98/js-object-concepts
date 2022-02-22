
const student = {
  nname: 'Abul Bashar',
  id: 101,
  age: 25,
  balance: 1500000,
  migrated: false,
  major: 'Information Technology',
  subjects: ['English', 'Physics', 'Finish', 'Math 1', 'Math 2', 'Basics of Programming'],
  entranceExam: function () {
    console.log(this.nname, 'taking exam on 9th of February')
  },
  currentBallance: function (tutionFee, livingCost) {
    this.balance = this.balance - tutionFee - livingCost;
    return this.balance;
  }
}

/*
Different types of for loops:-
1. for(let i = 0; i < array.length; i++){}
2.for(const num of numbers){}     // array
3.for(const property in object){}  // object
*/



/*
Several ways of looping an Object
1. through a for in loop.....
2.through capturing keys of an object with key function...
3. through capturing entries and using for of loop to and destructuring.....
*/






// 1.
for (const prop in student) {
  // console.log(prop);
}
/*=====> 
nname
id
age
balance        
migrated       
major
subjects       
entranceExam   
currentBallance
*/

for (const prop in student) {
  // console.log(prop, student[prop])
}
/*=======>
nname Abul Bashar
id 101
age 25
balance 1500000
migrated false
major Information Technology
subjects [
  'English',
  'Physics',
  'Finish',
  'Math 1',
  'Math 2',
  'Basics of Programming'
]
entranceExam [Function: entranceExam]
currentBallance [Function: currentBallance]
PS C:\Main Projects\js-object-concepts> node loop-object.js
name Abul Bashar
id 101
age 25
balance 1500000
migrated false
major Information Technology
subjects [
  'English',
  'Physics',
  'Finish',
  'Math 1',
  'Math 2',
  'Basics of Programming'   
]
entranceExam [Function: entranceExam]
currentBallance [Function: currentBallance]
*/




// 2.
const keys = Object.keys(student);
// console.log(keys);
/*=====>
[
  'nname',
  'id',
  'age',
  'balance',
  'migrated',
  'major',
  'subjects',
  'entranceExam',
  'currentBallance'
]
*/
for (const key of keys) {
  // console.log(key, student[key])
}
/*====>
nname Abul Bashar
id 101
age 25
balance 1500000
migrated false
major Information Technology
subjects [
  'English',
  'Physics',
  'Finish',
  'Math 1',
  'Math 2',
  'Basics of Programming'
]
entranceExam [Function: entranceExam]
currentBallance [Function: currentBallance]
*/






// 3.
const entries = Object.entries(student);
// console.log(entries);
/*=====>
[
  [ 'nname', 'Abul Bashar' ],
  [ 'id', 101 ],
  [ 'age', 25 ],
  [ 'balance', 1500000 ],
  [ 'migrated', false ],
  [ 'major', 'Information Technology' ],
  [
    'subjects',
    [
      'English',
      'Physics',
      'Finish',
      'Math 1',
      'Math 2',
      'Basics of Programming'
    ]
  ],
  [ 'entranceExam', [Function: entranceExam] ],
  [ 'currentBallance', [Function: currentBallance] 
]
]*/

for (const [key, value] of Object.entries(student)) {
  console.log(key, value);
}
/*====>
nname Abul Bashar
id 101
age 25
balance 1500000
migrated false
major Information Technology
subjects [
  'English',
  'Physics',
  'Finish',
  'Math 1',
  'Math 2',
  'Basics of Programming'
]
entranceExam [Function: entranceExam]      
currentBallance [Function: currentBallance]
*/