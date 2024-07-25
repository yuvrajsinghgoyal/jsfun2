const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];

let CheckResult=(name)=>{
    for( let student of students){
        if(student.name===name){
            return student.marks>90
            ? console.log(`Congratualation your passed with ${student.marks} marks`)
            : console.log(`Sorry your fail your marks is ${student.marks}`);
        }
    }
    console.log("invailid name")
}


CheckResult("Mithun");
// OUTPUT: Congratulations Mithun! You have cleared the exam.

CheckResult("Prabir");
// OUTPUT: Sorry ! You have not cleared the exam.

CheckResult("Mithun S");
// OUTPUT: Invalid User !!!