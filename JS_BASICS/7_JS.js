// Kis trhan se data ko memory mai rkha jata hai r access kia jata hai
//2 categorizations hain iski primitive and non primitive


//BigInt, Symbol-making unique wrapper, 
//If you have to master javascript then master objects, browser events

//null is an object (mean empty not 0)
//undefined is a type

let id = Symbol('123');
let accountId = Symbol('123');

console.log(id);

console.log(accountId);

console.log(id == accountId);

const bigNumber = 324354656747;
console.log(bigNumber);


const myArr = ["AHmad","Ali","Khan"];

// const myObj = {
//     name:"Saif"
//     age:12,
// }


const myFun = function(){}

//function return data type will be called object function

//Stack(Primitive) : Gives copy of data does not give you orignal data
//Heap(non - primtivie) : Gives you the refrence can direclty change the value does not have the concept of the copy

// Stack

let sid = "SaifAliKhan";

let nid = sid;
sid = "Tehreem"

nid = "Ahmad Ali Khan"
console.log(sid);
console.log(nid);


// =================================================================
// Heap

let one = {
    email:"saify1053@gmail.com",
}

let two = one;

two.email = "saifworld396@gmail.com";

console.log(one.email);
console.log(two.email);