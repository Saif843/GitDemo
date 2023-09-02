// loops = iteration



// for(let i = 0 ; i < 10; i++){
//     const element = i
//     if(i == 5){
//         console.log("Saif is a great guy");
//     }
//     console.log(element);
// }


for(let i = 0 ; i < 10 ; i++){
    console.log("----------------------------------------")
    console.log(`The inner : ${i}`);
    console.log("----------------------------------------")
    for(let j = 0 ; j < 10 ; j++){
        console.log(`The outer j : ${j}, The inner : ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// undefined is a problematic thing itself
// continue is just like yr aik bar maaf krdo