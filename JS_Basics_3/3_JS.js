// IFFI

// Like for databse connection file we apply immediate connection

// GLobal scope k poulution se problem se bachne k liye use krte hain ise

(function chai(){
    // named IIFE
    console.log("Saif is working");
})();



// 2 IIFE aik sth likhne mai ; lgate hain

// unnamed IIFE and parameter passed IIFE
((name) => {
    console.log("Saif is working ");
    console.log(`${name} is working`)
})("Saif Ali Khan")

console.log(("Saif ALi Khan"));

