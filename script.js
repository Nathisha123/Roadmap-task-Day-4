//Questions: https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit?usp=sharing

//!Print odd numbers in an array:
//solution:

//Using anonymous function:
     var result = [];
     var a = function (arr)
     {
        for(var i=0; i<arr.length; i++)
        {
            if(arr[i]%2!==0)
            {
               result.push(arr[i]);
            }
        }
        return result;
     }
    console.log(a([12, 17, 19, 21, 57, 44]));

//Using IIFE function:
     var result1 = [];
     (function (arr2)
     {
        for(var i=0; i<arr2.length; i++)
        {
            if(arr2[i]%2!==0)
            {
               result1.push(arr2[i]);
            }
        }
        console.log(result1);
     }([12, 17, 19, 21, 57, 44]));

//Using Arrow function:
     var result2 = [];
     var b= (arr3)=>{
        for(var i=0; i<arr3.length; i++)
        {
            if(arr3[i]%2!==0)
            {
                result2.push(arr3[i]);
            }
        }
        return result2;
    }
console.log(b([12, 17, 19, 21, 57, 44]));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//? 2. Convert all strings to title caps in a string array:
//solution:
//Anonymous method:

   let funct=function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(funct("The sTrIng iS in uPPercAse"));

//  IIFE method:

  (function (str)
   {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++)
     {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
   console.log(str.join(' '));
  })("The sTrIng iS in uPPercAse")

//   Arrow function:

  var title=(str)=>
     {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++)
       {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    }
    console.log(title("The sTrIng iS in uPPercAse"))

//*To find the Sum of all numbers in an array:
//solution:
//anonymous method:

let x = function(arr)
{
    var sum = 0;
    for(var i = 0 ; i< arr.length ; i++)
    {
       sum = sum + arr[i];
     }
     return sum;
  }
console.log(x([1,2,3,4,5]));

IIFE :
(function(arr)
{
var sum = 0;
    for(var i = 0 ; i< arr.length ; i++){
       sum = sum + arr[i];
     }
     console.log(sum);
})([1,2,3,4,5])

// Arrow:

var Element= (ele) => {
  var sum = 0;
  for (var i = 0; i < ele.length; i++)
  {
    sum = sum + ele[i];
  }
  return sum;
}
console.log(Element([1,2,3,4,5]));

//----------------------------------------------------------------------------------------------------------------------------------------------

//!Return all Prime numbers in an array:
//Anonymous function:
var Input = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    let count = 0;
    for (var j = 1; j <= arr[i]; j++) {
      if (arr[i] % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      console.log(arr[i]);
    }
  }
};
Input([12, 13, 23, 73, 97, 56, 38]);


//IIFE function:
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    let count = 0;
    for (var j = 1; j <= arr[i]; j++) {
      if (arr[i] % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      console.log(arr[i]);
    }
  }
}
)([12, 13, 23, 73, 97, 56, 38]);


//Arrow function:
var Prime=(ele)=>{
  for (var i = 0; i < ele.length; i++) {
    let count = 0;
    for (var j = 1; j <= ele[i]; j++) {
      if (ele[i] % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      console.log(ele[i]);
    }
  }
}
Prime([12, 13, 23, 73, 97, 56, 38]);

//----------------------------------------------------------------------------------------------------------------------------------------------


//*To return all palindromes in an array:
//Anonymous method
 var palindrome = function(arr)
{
  var result=[];
  for (var i=0;i<arr.length;i++)
{
  var data=arr[i].split("").reverse().join("");
  if(data===arr[i])
  {
    result.push(arr[i]);
  }
}
return result;
}
console.log(palindrome(['mom','dad','data', '121']));

//IIFE method:
(function(arr)
{
  var result=[];
  for (var i=0;i<arr.length;i++)
{
  var data=arr[i].split("").reverse().join("");
  if(data===arr[i])
  {
    result.push(arr[i]);
  }
  
}
console.log (result);
}
((['mom','dad','data', '121'])));

//Arrow function:
let Palindrome2 = (val)=>{
  var result=[];
    for (var i=0;i<val.length;i++)
  {
    var data=val[i].split("").reverse().join("");
    if(data===val[i])
    {
      result.push(val[i]);
    }
    
  }
  console.log (result);
  }
  Palindrome2(['mom','dad','data', '121']);

//-------------------------------------------------------------------------------------------------------------------------------------------

//!Return Median of two sorted arrays:
//Anonymous function:

var array1= [1,3,5,7,9,10];
var array2= [2,4,6,8,7];
var Median= function(array1, array2)
{
  let array =[...array1,...array2];
  array.sort((a,b)=>a-b);
  let n = array.length;
  if(n%2===0)
  {
    return(array[n/2]+array[n/2-1])/2;
  }
  else
  {
    return array[Math.floor(n/2)];
  }
}
console.log(Median(array1,array2));

//IIFE method

var array1= [1,3,5,7,9,10];
var array2= [2,4,6,8,7];
(function(array1, array2)
{
  let array =[...array1,...array2];
  array.sort((a,b)=>a-b);
  let n = array.length;
  if(n%2===0)
  {
    console.log((array[n/2]+array[n/2-1])/2);
  }
  else
  {
    console.log(array[Math.floor(n/2)]);
  }
}
)(array1,array2);

//---------------------------------------------------------------------------------------------------------------------------------------------------------


//?Remove duplicates from an array:
//solution:
//Anonymous method

let numb = [1, 2, 3, 4, 7, 7, 8, 3, 10, 12, 12];
let n = numb.length;
let temp = [];

let Duplicates = function (numbArray) {
  let order = numbArray.sort().slice();

  for (var i = 0; i < n; i++) {
    if (order[i] !== order[i + 1]) {
      temp.push(order[i]);
    }
  }
  temp.sort((a,b)=>a-b)
  console.log(temp);
}

Duplicates(numb);

//IIFE method:

let numb1 = [1, 2, 3, 4, 7, 7, 8, 3, 10, 12, 12];
let n1 = numb1.length;
let temp1 = [];
(
  function (numbArray1) {
    let order1 = numbArray1.sort().slice();
  
    for (var i = 0; i < n; i++) {
      if (order1[i] !== order1[i + 1]) {
        temp1.push(order1[i]);
      }
    }
    temp1.sort((a,b)=>a-b)
    console.log(temp1);
  }
)(numb1);


//---------------------------------------------------------------------------------------------------------------------------------------------------------------

//! Rotate an array:
//solution:
//Anonymous method:

var arr =[1,2,3,4,5];
var k=3;
var rotate= function(arr,k)
{
  for (var i=0;i<k;i++)
  {
    arr.push(arr[i]);
 
  }
  for (var i=0;i<k;i++)
  {
    arr.shift()
  }
  console.log(arr)
} ;
rotate(arr,k);


//IIFE method:
var arr =[1,2,3,4,5];
var k=3;
 (function(arr,k)
{
  for (var i=0;i<k;i++)
  {
    arr.push(arr[i]);
   
  }
  for (var i=0;i<k;i++)
  {
    arr.shift()
    
  }
  console.log(arr);
}) (arr,k);





//-------------------------------------------------------------------------------END------------------------------------------------------------------------------------------------------------------------