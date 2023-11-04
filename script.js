//Print odd numbers in an array:
//Using anonymous function:
//solution:
//      var result = [];
//      var a = function (arr)
//      {
//         for(var i=0; i<arr.length; i++)
//         {
//             if(arr[i]%2!==0)
//             {
//                result.push(arr[i]);
//             }
//         }
//         return result;
//      }
//     console.log($a([12, 17, 19, 21, 57, 44]));



// //Using IIFE function:
//      var result1 = [];
//      (function (arr2)
//      {
//         for(var i=0; i<arr2.length; i++)
//         {
//             if(arr2[i]%2!==0)
//             {
//                result1.push(arr2[i]);
//             }
//         }
//         console.log(result1);
//      }([12, 17, 19, 21, 57, 44]));


// //Using Arrow function:
//      var result2 = [];
//      var b= (arr3)=>{
//         for(var i=0; i<arr3.length; i++)
//         {
//             if(arr3[i]%2!==0)
//             {
//                 result2.push(arr3[i]);
//             }
//         }
//         return result2;
//     }
// console.log(b([12, 17, 19, 21, 57, 44]));



// 2. Convert all strings to title caps in a string array:
// Anonymous method:
//    let funct=function (str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
//   console.log(funct("The sTrIng iS in uPPercAse"));

 // IIFE method:

//   (function (str)
//    {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++)
//      {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     console.log(str[i]);
//   })(["The sTrIng iS in uPPercAse"])

//IIFE 

//   (function (str) {
//    str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++)
//     {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     console.log(str);
//   }(['The sTrIng iS in uPPercAse']));
 
//   Arrow function: 
   

//   var arrow=(str)=>
//      {
//       str = str.toLowerCase().split(' ');
//       for (var i = 0; i < str.length; i++)
//        {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//       }
//       return str.join('');
//     }
//     console.log(arrow(["The sTrIng iS in uPPercAse"]))


Sum of all numbers in an array:
solution:
anonymous  :  function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
IIFE :       (function(array){
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
})([1,2,3,4])

Arrow:       sum = (array)=>{
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
     }


