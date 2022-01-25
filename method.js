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

student.entranceExam();     //====> Abul Bashar taking exam on 9th of February
const remaining1 = student.currentBallance(300000, 75000)
const remaining2 = student.currentBallance(250000, 65000)

console.log(remaining1);      //===> 1125000
console.log(remaining2);      //===> 810000


/*
 NOTE: This idea of setting a property value of an Object is called Method......
So, method is a function inside an Object.

In methods when we call another property to use as parameters we use (this.):-entranceExam ... 
Otherwise we can also give parameters to that function from outside the object when we are going to call it:- currentBalance...

*/
