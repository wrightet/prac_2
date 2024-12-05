
// Exercise 2: Create an object representing a student (name, age, subjects) and an array of three such students. Write a loop to print their names.
const students = [
    { name: "Alice", age: 20, subjects: ["Math", "English"] },
    { name: "Bob", age: 22, subjects: ["History", "Science"] },
    { name: "Charlie", age: 21, subjects: ["Art", "Physics"] }
  ];
  
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.name);
    
  }