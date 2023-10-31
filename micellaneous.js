// Q5.List of all firstName from array whose age is more than 30
const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"Cob",age:75},
  {firstName:"Sam",lastName:"Lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];
//Chaining
const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output);

// Q6.Print the names of students who scored more than 60
let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];
const ans=student.filter((x)=> {
return x.marks>60}).map((x)=>{return x.name});
console.log(ans);

/* Q7.Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
 student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];
*/

const totalMarks=student.map((stu)=>{
    if(stu.marks<60){
        stu.marks+=20;
    }
    return stu;
}).filter((stu)=>stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0);
console.log(totalMarks);