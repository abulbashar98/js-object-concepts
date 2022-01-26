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




const student2 = {
  name: 'Naymur Rahman Nabil',
  id: 102,
  age: 25,
  balance: 2500000,
  migrated: true
}

/* NOTE:-
To use a Method from another object we can use:-
1. bind()
2. call()
3. apply()

Three of them does the exact same thing.... If we Hover our mouse inside the () when we are using these 3 functions it will state to set (this.argument).......
Basically they set the (this.argument reference to a different Object)

Difference of bind() and call():- 
1.
The difference is purely Syntactical.... 
when we use bind we need to set the return Value to a function written as a variable.... inside bind we just set the reference Object for this.argument....
then we set the Parameters of that method when we call the function where the return value was set.....

2. however using call() is a lot simpler.....
we don't need to set the return value on another function....
when we call we just set this.argument as the first parameter of call().... 
Hover to see...
then after then we simply use comma (,) to write parameters of the Method we are calling as parameters of call....

3. call() and apply() are almost same in a sense that we also don't need to set the return value of Method in a function like call....
 Difference is:- as first parameter of apply() we again set the this.argument reference object but we don't use comma (,) after comma (,) to set  parameters of Method as other parameters of apply()....
Rather we use Array to declare Method parameters in second apply parameter......
*/







// 2.
student.currentBallance.call(student2, 300000, 200000);
/*=====>
from here {
  name: 'Naymur Rahman Nabil',
  id: 102,
  age: 25,
  balance: 2000000,
  migrated: true
}
*/


// 3.
const student3 = {
  name: 'Abu Naim Heera',
  id: 102,
  age: 25,
  balance: 5000000,
  migrated: true
}
student.currentBallance.apply(student3, [200000, 500000])
/*======>
from here {
  name: 'Abu Naim Heera',
  id: 102,
  age: 25,
  balance: 4300000,      
  migrated: true
}
*/
