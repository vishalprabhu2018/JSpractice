// ) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    let op=arr.map((element)=>{
        return element*2
    })
    return op
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  
  function stringItUp(arr){
      let op=arr.map((element)=>{
         return element+"";
      });
      return op;
    }
    
    console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  
  
  //3).   Capitalize each of an array of names
  function capitalizeNames(arr){
    let op=arr.map((element)=>{
     let capital=  element[0].toUpperCase();
      let e1= element.split('');
         e1.shift();
        let result=e1.join('');
         return capital+result;
      
        
    });
    return op;
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// 4).  Make an array of strings of the names
function namesOnly(arr){
    let op=arr.map((element)=>{
        return element.name;
    })
    return op
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
  
  
// 5). Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    let op=arr.map((element)=>{
      if (element.age>18){
        return `${element.name} can go to the matrix`
      }
      else{
        return `${element.name} is under age !!`
      }
    })
    return op
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]



// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
  let op=arr.map((element)=>{
    return `<h1>${element.name}</h1>${element.age}<h2></h2>`
  })
  return op;
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]