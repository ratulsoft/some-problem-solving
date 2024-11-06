// in this sestion i will implementions js factorial. today i fllow two methiods 
// fast i will fllow itrative and also js recursive funtions . so let's fun:


// ............... factorail number of non nagative intergers n!,donoted as n!, the product less than or 
// .....eual to n. the factorial of n id difined as.


//fast of all i will declear a funtion 

// fast approch use if else condition

let fact = 5 ; //declear a variable

if ( fact == 0){
    console.log("Nagative is  not allwed");  // factorls nagative number is not allwed
}else{
  let factorail = 1; //varialbe init for 

  for(let i = 1 ; i <= fact; i++ ){
    factorail = factorail * i
  }
  console.log(factorail);

}

// ....................... second approch..............

let facto = 10 ;

if( facto == 0){
    console.log("factorials is not allowed");
}else{
    let fa = 1;
    for(let p = facto; p > 1; p--){
        fa *= p
    }
    console.log(fa);
}
// trird approch  .................. funtion scope ...................
function factor(n){
if(n == 0){
    return 1
}else{
    let k = 1;
    for( let j = 1 ; j <=n; j++){
        k *= j;
    }
    return k;
}
}

let factorials = factor(6);
console.log(factorials);
//  ................... recurion approch .......................
// fast off all what is recurtion .......
function recution(n){
if(n < 0 ){
    return "factorial number nagative intger are not allowed";
} if( n === 1 || n ===0 ){
    return 1;
} 
return n * recution ( n -1); 
}
console.log(recution(-1));




// next pratices.........................

 function fuc_num(x){
    
    if( x < 0){
        return "nagative initger are not alloed in recursion";
    } if(x === 0 || x === 1){
        return 1;
    }
    return x * fuc_num ( x - 1);
 }

 let fa_n = fuc_num(5);
 console.log(fa_n);