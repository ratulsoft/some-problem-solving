// function recursive(x){
   
//     if( x == 0){
//         console.log(0)
//     }else{
//         x = x ** x
//     }
//     recursive(3);
// }


// function recursive(x) {
//     if (x === 0) {
//         console.log(0);
//         return; // Terminates recursion when x is 0
//     } else {
//         console.log(x); // To see the value before recursion
//         x = x ** x;
//          // This will make x very large very quickly
//     }
//     recursive(x - 1); // Call with x decremented
// }

// recursive(5);

// let number = 385565565656;
// let str =number.toString();
// if( number === 0){
//     console.log(number);
// }else{
  
//     let current = parseInt(str[0]);
//     for(let i = 1;i<str.length; i++){
//         current = current + parseInt(str[i])
//     }
//     console.log(current);



// }

// let str ="130";


// console.log(current)

// // if(number === 0){
// //     console.log(number);
   
// // }else{

    
    
// // }
// // let current = number[0];



// function num(p){
//   let number = p.toString();
//   let current = parseInt(number[0]);
//   for(let i = 1 ; i< number.length; i++){
//     current += parseInt(number[i]); 
// }
// return current;

// }
// let ouput = num(790);
// console.log(ouput);


function recursive(x){
  let str = x.toString();
  if ( x === 0){
    return 0;
  }
  return recursive + parseInt(str(0));



}


let a =recursive(111);
console.log(a);