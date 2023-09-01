// this keyword tells about current context(values jo variable hold krhe hain)

// arrow function smjhne k liye this smjhna pre ga this smjhne k liye wapis object mai jana pre ga

const user = {
    name:"Saif Ali Khan",
    age:23,
    messagesend : function(){
        console.log(`${this.name}, Welcome `)
        console.log(this)
    }
}

// console.log(user.messagesend());
// user.name = "Ahmad Ali"
// console.log(user.messagesend());

console.log(this);


// Browser k andr jo global object hai wo window object hai

// function coffee(){
//     let userName = "Khan"
//     console.log(this)
// }

// coffee()


// const tha = function(){
//     let userName = "Khan"
//     console.log(this.userName)
// }

// tha()

const tha = () => {
    let userName = "Khan"
    console.log(this.userName)
}

tha()


// arrow function mai r normal function mai kia fark hai


// const val = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(val(9,10))


// Implicit return arrow function
// const val = (num1,num2) => num1 + num2

// const val = (num1,num2) => (num1 + num2)

const val = () => ({name:"Saif Ali Khan"})

