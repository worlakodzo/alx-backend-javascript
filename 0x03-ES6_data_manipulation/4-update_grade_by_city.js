const updateStudentGradeByCity = (studentes, city, newGrades) => studentes.filter((student) => {
  if (student.location === city) {
    return student;
  }
  return false;
}).map((student) => {
  if (student) {
    let grade = 'N/A';
    for (const grade in newGrades) {
      if (grade.studentId === student.id) {
        grade = grade.grade;
      }
    }
    return { ...student, grade };
  }
  return student;
});

export default updateStudentGradeByCity;
