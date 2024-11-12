
// // now i can create an arrray;
// let arry = [];
// let variable_1 = arry.push(56);
// let variable_2 = arry.push(2);
// let variable_3 = arry.push(5);
// let variable_4 = arry.push(4);


// let shiftc = arry.shift()

// let unshift = unshift();


// console.log(shiftc);
// const list = [ 10,120,30,40,40];
// list.shift();


// let sum = 0;
// for ( let i = 1; i <list.length; i++){
//      sum += list[i];
     
//     }
//     console.log(sum);
// console.log(sum);

// const list = [10, 120, 30, 40, 40];
// list.shift();  // Removes the first element, so the list becomes [120, 30, 40, 40]

// let sum = 0;  // Declare sum outside the loop

// for (let i = 0; i < list.length; i++) {
//     sum += list[i];  // Add each element of the list to the sum
// }

// console.log(sum);  // Output the total sum

// const arry = ["md yeasin sheikh",10,30,40,60,70];

// arry.shift();
// arry.unshift(1000);

// let sum = 0 ;
// for(let i = 0; i < arry.length; i++){
//    sum = sum + arry[i];
// }
// console.log(sum);


// let arry = [10,30,405,"md yeaisn sheikh",905960];
// // for(let i =0; i<arry.length; i++ ){
// //     console.log(i)
// //     console.log(arry[i]);
// // }

// arry.splice(1,3,"ratul",30)
// console.log(arry)



// let arry  =[10,20,30,40,50,60,"md yeasin sheikh","ratul vaya","kpby"];
// arry.splice(6,7 , 50, 100);
// console.log(arry);

// let sqrt = 0;
// for( let i = 0; i < arry.length; i++){
//     sqrt +=  arry[i];
// }
// console.log(sqrt);


// let a = [ 10, 4];
// let b = [40,50 ];
// let add = [30.59];
// let c =a.concat(b);
// let g=c.concat(add);
// console.log(g);
//  console.log(c);



// let list = [10,4,50,60,6,60,795]

// let new1 = list.slice(-1,7);
// console.log(new1); 


// let list = [ 10,40,67,34,645];

// let slice = list.slice(1,2);
// console.log(slice);
// console.log(list);




// let n = 80;
// for(let i = 0 ; i<arry.length; i++){
    //   if( n === arry[i]){
        //     console.log(true)
        //     return;
        //   }else{ 
            //     console.log(false);
            //   }
            
//             // }
// let arry  = [10,20,30,40,50,60,70,80,100];

// let n = 90;
// for(let i = 0; i < arry.length; i++){
//   if(n === arry[i]){
//     console.log(true);
//     return;  // Exit the function or loop once the value is found
//   }
// }
// // If the loop completes without finding the value
// console.log(false);




// for(let i = 0; i< arry.length; i++){
//   console.log(i);
// } 


// let includes = arry.includes(96,0);
// console.log(includes);


// let arry = [10,304,506,697,30,506,970,50923,4095,96];

// let index = arry.lastIndexOfindexOf(506,2);
// console.log(index);

// let numbers = [10, 20, 30, 20, 40];
// console.log(numbers.lastIndexOf(20));  // 3 (the last occurrence of 20 is at index 3)
// console.log(numbers.lastIndexOf(30));  // -1 (50 is not in the array)


//  let arry = [10,20,30,40,50];
//  arry.forEach(function num(){
//     console.log(arry * 2);
//  })

//  num()

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//   console.log(number * 2);  // Multiply each element by 2
// });


// let list = [ 1,2,3,4,5,49405,6090];

// let sum = 0;
// list.forEach(
// function (p ){
//   sum +=p;
  
// }
// )
// console.log(sum);
// let arry = [ 10,20,30,40,50,60,70];
// let new1 = arry.map(10,50);
// console.log(new1)

// let hello = " i did't care about this things ";
// let own = " i am a won hero of my life no matter life is through "
// let always = " alwash tell about your self i am super in my life in ";

// let newArray = array.map(function(currentValue, index, array) {
//     // return element to be added in the newArray
//   });

//   let numbers = [1, 2, 3, 4];
//   let doubled = numbers.map(function(num) {
//     return num * 2;
//   });
  
//   console.log(doubled); // [2, 4, 6, 8]
    

// let arry = [ 10,20,30,40,50];
// let map = arry.map(function (n){
//   return n * 2 ;
// })
// console.log(map)


// let list = [1,2,3,4,5,6,6,7,8];
// let pi = list.map(function(p){
//     return p * 4;
// })
// console.log(pi);

// let list = [10,20,30,40,50,60,70];
// let multiple = list.map( (p)=>{
// return ;
// } )
// console.log(multiple);
// let users = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Doe', age: 22 }
//   ];

// let userName = users.map((p)=>{
//     return p.age;

// })  
// console.log(userName)

// let userName1 = users.map((p)=>{
//     return p.name;
    
// }) 
// console.log(userName1);
// let list = [ 10,12,13,45,677562,62646,4321321,3123,2323,4435,453566];
// let filter = list.filter((p)=> p % 2 == 0);
// console.log(filter);
// let list = [1,2,3,5,6,7,8,9]
// let ruduce = list.reduce((previous,curent,index,arry)=>{


// })
// console.log(ruduce);
// const numbers = [10, 20, 30, 40, 50];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0 );
// console.log(sum); // Output: 150

let arry = [ 1,2,3,4,5,6,7,3013,4505,3,50];
// let sum = arry.reduce((prev,current) => prev + current,0);
// console.log(sum);

// let max = arry.reduce((pre, cur)=> {
//   let ma =  pre>cur
    
//     return ma
// });


// searching methods using find methiods

// let find = [ 1 ,2,4,5,6,7,8,9,11];

// let find1 = find.find(function(n ,index){
//  return  n> 10;


// })

// console.log(find1);


