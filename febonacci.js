// let n = 11;

// if(n == 0){
//     console.log("nagative is not allowed in feboncci sequance");
// }else if(n == 1 || n == 2){
//     console.log(1);
// }else{
  
//     let prev = 0;

//     let cur = 1;
//     let next ;

//     for(let i = 2; i <=n; i++ ){
//       next = prev + cur;
//       prev =cur
//       cur = next;
//     }
//     console.log(next);

// }


// let n = 10;
// if( n ==0){
//     console.log("fabonacci nagative number is not alloued");
// }else if(n === 1 || n === 0){
//     console.log(1);
// }else{
//     let perb = 0;
//     let current = 1;
//     let next;
//     for(i  = 1; i <=n; i++){
//         next = perb + current;
//         perb = current;
//         current = next;
//     }
//     console.log(current)
// }




// function febo(febonacci){
//     if(febonacci < 0){
//         console.log("faboncii is not allweod nagative number");
//     }else if(febonacci === 1){
//       return 1;
//     }else if(febonacci === 2){
//         return 2;
//     }else{
//         let prev = 0;
//         let current = 1;
//         let next ;
//         for(let i = 1; i<=febonacci; i++){
//             next = prev + current;
//             prev = current;
//             current = next;
//         }
//         return current;
//     }
// }

// let f = febo(4);
// console.log(f);






// now recusive way to fllow solved this problem like this.



// function recusive(n){
//     if( n === 0){
//         return "nagative number is not allwed";
    
//     }if( n === 1 || n ===2){
//         return 2;
//     }
//     let prev = 0;
//     let cur = 1;
//     let next;
    
//     next = prev + cur ,(n-1);
//     prev = cur;
//     cur = next;
//  return next;    
// }
 
// let a =recusive(5);
// console.log(a);

// function recursive(n) {
//     if (n < 0) {
//         return "Negative number is not allowed";
//     }
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return recursive(n - 1) + recursive(n - 2);
// }

// let a = recursive(11);
// console.log(a);


// function fun(para){
//     if(para < 0){
//         return "nagative intiger number is not allwed in febonacci series"
//     }
//     if( para === 1  || para ===2){
//         return 1;
//     }
//     return fun(para - 1 ) + fun(para - 2);  
// }

// let a = fun(10);
// console.log(a);

// function fun(para) {
//     if (para < 0) {
//         return "Negative integer number is not allowed in Fibonacci series";
//     }
//     if (para === 1 || para === 2) {
//         return 1; // Return 1 for both F(1) and F(2)
//     }
//     return fun(para - 1) + fun(para - 2);
// }

// let a = fun(10);
// console.log(a);
// function sum(p){
//     let sum = 1 ;
//     for(let i =0 ; i<= p; i++ ){
//         sum = sum + i
//     }
//     return sum
// }
// console.log(sum(1000));

// let sum = 1
// for( let i = 0; i <=100; i++){
//     sum  = sum + i;
// }
// console.log(sum);

// function recursive(n){
//   if( n === 1){
//     return 1;
//   }
//   recursive = recursive+ n (n-1);
// }
// let recu =recursive(3);
// console.log(recu);

function sumOfDigits(num) {
    num = Math.abs(num); // Handle negative numbers
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

let a =sumOfDigits(1000);
console.log(a);