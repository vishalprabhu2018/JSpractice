//Array squared 

function squaredArray(arr){
   let op= arr.map((element)=>{
       return element*element;
    })
    return op;
}

// console.log(squaredArray([1, 2, 3, 4, 5]));


// Sum of every positive element

function sumofPositive(arr){
    let op= arr.filter((element)=>{
       return  element>0
     }).reduce((acc,curr)=>{
          return    acc +=curr;
     })
     return op;
 }
 
 console.log(sumofPositive([1, -4, 12, 0, -3, 29, -150]));

//  Get name initials
 
function nameInitials(input){
 let op=input.split(' ').map((word)=>{ return word[0]}).join('');
 return op;
}

console.log(nameInitials('vishal is a good boy'));


