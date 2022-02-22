const phone = { name: 'poco X2', price: 23000, ram: 6, rom: 64, color: 'blue' }

// Note:- The properties of an Object are called "Keys"....
const keys = Object.keys(phone);
// console.log(keys);          //=====> [ 'name', 'price', 'ram', 'rom', 'color' ]


// Note:- Values of those Keys or properties  are called "Values"....
const values = Object.values(phone);
// console.log(values);        //=====> [ 'poco X2', 23000, 6, 64, 'blue' ]



//Note:- the pairing of Key and value is called an "entry"; given as two dimensional Array..
const entries = Object.entries(phone);
// console.log(entries);

//====> 
/*
[
  [ 'name', 'poco X2' ],
  [ 'price', 23000 ],
  [ 'ram', 6 ],
  [ 'rom', 64 ],
  [ 'color', 'blue' ]
]
*/





/* 
CASE 1:- Before sealing{seal()} or freezing{freeze()} an Object 

 1.we can "delete" a property of an Object....
 2.we can change the value of a Key
 3.we can add a property with value..... can add entry.....

 */



// 1.
delete phone.name;
// console.log(phone)       //======> { price: 23000, ram: 6, rom: 64, color: 'blue' }

// 2.
phone.rom = 256;
// console.log(phone);        //======> { price: 23000, ram: 6, rom: 256, color: 'blue' }

// 3.
phone.processor = 'snapdragon 870g';
// console.log(phone); 
//=====> {price: 23000,ram: 6,rom: 256,color:'blue'processor: 'snapdragon 870g'}





const phone2 = { name: 'samsung M32', price: 22000, ram: 6, rom: 128, color: 'Black' };
/* 
CASE 2:- After sealing{seal()} an Object...

 1.we can not  "delete" a property of an Object....
 2.we can not add a property with value..... can not add entry.....
 3.we can change the value of an existing Key......... 
 */


Object.seal(phone2);

// 1.
delete phone2.name;
// console.log(phone2);  
//===> { name: 'samsung M32', price: 22000, ram: 6, rom: 128, color: 'Black' }


// 2.
phone2.processor = 'snapdragon 830';
// console.log(phone2);  
//===> { name: 'samsung M32', price: 22000, ram: 6, rom: 128, color: 'Black' }


// 3. 
phone2.rom = 256;
// console.log(phone2);  
//====>{ name: 'samsung M32', price: 22000, ram: 6, rom: 256, color: 'Black' }





const phone3 = { name: 'oneplus 9c', price: 36000, ram: 8, rom: 128, color: 'sky blue' };
/* 
CASE 3:- After freezing{freeze()} an Object...

 1.we can not  "delete" a property of an Object....
 2.we can not add a property with value..... can not add entry.....
 3.we can not even change the value of an existing Key......... 
 */
Object.freeze(phone3);

// 1.
delete phone3.name;
// console.log(phone3);
//====> { name: 'onePlus 9c', price: 36000, ram: 8, rom: 128, color: 'sky blue' }


// 2.
phone3.brand = 'OnePlus';
// console.log(phone3);  
//====>  { name: 'onePlus 9c', price: 36000, ram: 8, rom: 128, color: 'sky blue' }

// 3. 
phone3.rom = 256;
// console.log(phone3);
//====> { name: 'onePlus 9c', price: 36000, ram: 8, rom: 128, color: 'sky blue' }

