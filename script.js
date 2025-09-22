//  CREATE OUR OWN FUNCTION

// function print(){              //  }
//     console.log("shashank")    //  } FUNCTION DEFINED  
// }                              //  }
// print();                        //  }  FUNCTION CALL


// ==> INPUT FUNCTION

// function shash(a,b){
//     return(a*b);
// }
// console.log(`multi of numbers = ${shash(3,3)}`);

// ==> MULTI OF (a,b),(b,c),(c,a) 

// function bunny(x,y){
//     return(x*y);
// }
// let a = 2;
// let b = 4;
// let c = 6;
// console.log(`multi of a and b = ${bunny(a,b)}`)
// console.log(`multi of b and c = ${bunny(b,c)}`)
// console.log(`multi of c and a = ${bunny(c,a)}`)

// ARROW FUNCTION
// const sum = (a,b) => {
//     return(a*b);
// }
// console.log(`sum of a and b = ${sum(2,2)}`); 

// LETS PRACTICE

// function bunny(str){
//     let count  = 0;
//     for(const char of str ){
//      if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         count++;
//     }
// }
// console.log(count);
// }

// => FOR EACH LOOP IN ARRAYS

// let arr = [1,2,3,4,5]
// arr.forEach((val)=> {
//     console.log(val)
// }); 

// => LETS PRACTICE

// let arr=[1,2,3,4,5,]
// arr.forEach((val) => {
//     console.log((val*val))
// });

// FILTER METHOD 

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newarr = arr.filter((val)=>{
//     return val % 2 === 0;
// })
// console.log(newarr); 

// LETS PRACTICE
// question1 

// let marks = [66,78,93,98,45,98,97,90];
// let nientyplus = marks.filter((val)=>{
//     return val>90;
// });
// console.log(nientyplus) 

// question2

//  let num = prompt("enter a number");
//  let arr = [];
//  for(let i = 1;i<=num;i++){
//     arr[i] = i;
// }
// const output = arr.reduce((prev,curr) => {
//     return prev+curr;
//  });
//  console.log(`sum = ${output}`);

//  const factorial = arr.reduce((prev,curr) => {
//     return prev * curr;
//  });
//  console.log(`factorial = ${factorial}`);
