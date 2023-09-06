// // BMI index calculator

// // Form pr jb event hote hain to bht sare concepts ate hain
// // Form we have submit wla button not click
// const form = document.querySelector('form')

// // FOrm usbmit ya to post type mai hota hai ya get type mai 
// // lekin jb bhi submit hota hai uske value url mai ya phr server k pas chli jati hain

// // to jo bhi default action hai form ka use hmai khud rokna pre ga

// // this usecase will give you empty value
// cont height = parseInt(document.querySelector('#heigh').value); // agr hm ise bahir rkhte hain to hmai khali values mile usme data nh hoga
// // abhi hmara usecase y hai k hmai value chaiye hain 


// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     const height = parseInt(document.querySelector('#heigh').value);
//     const height = parseInt(document.querySelector('#heigh').value);
//     const result = document.querySelector('#result');

//     // iski calculation krte hue hmara code phat skta is liye ispe checks lgate hain
//     if(height === '' || height < 0 || isNaN(height)){
//         result.innerHTML = `Please give a valid `${height}`
//     }else if(weight === '' || weight < 0 || isNaN(weight)){
//         result.innerHTML = `Please give a valid `${width}`
//     }else{
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         result.innerHTML = `<span>${bmi}</span>`
//     }

//     result.innerHTML = `${height}`;

// })