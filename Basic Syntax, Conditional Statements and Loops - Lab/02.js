function printStudentInfo(name, age, grade) {
  let formattedGrade = grade.toFixed(2);

  console.log(`Name: ${name}, Age: ${age}, Grade: ${formattedGrade}`);
}

printStudentInfo('John', 15, 5.54678);