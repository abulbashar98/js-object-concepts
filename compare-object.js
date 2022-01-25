
const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 }
if (first === second) {
    // console.log('object are equal')
}
else {
    // console.log('objects are not the same');
}
//====> objects are not the same

// Note:- as objects are non-primitive data type, when we compare objects withe 2/3 equals it doesn't compare the Values or entries to be exact....
// Rather it compares their references..... This is called Referencial Inrugrity.....

// Example:

const third = first;
if (first === third) {
    // console.log('objects are equal')
}
else {
    // console.log('objects are not the same');
}
//====> objects are equal




/*
Several ways to compare objects with 2/3 equals:
1. by comparing their Stringified version......
2. Comapre them by using a compare function. 
*in which first we compare The length of an Array given by Keys function.....
*if the 1st condition is okay then we compare their values by using for in loop.....
*/


// 1.
console.log(JSON.stringify(first));      //=====> {"a":1,"b":2}
console.log(JSON.stringify(second));     //=====> {"a":1,"b":2}




if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('objects are equal')
}
else {
    console.log('objects are not equal')
}
//======> objects are equal




// 2.
// Note: Now with our first way of comparing objects we wont be able to compare correctly when the order of Entries are not the same.....
// Example:

const person1 = { name: 'rakib', age: 25 }
const person2 = { age: 25, name: 'rakib' }

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const property in obj1) {
        if (obj1[property] !== obj2[property]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(person1, person2);
console.log(isEqual);
//====> true
