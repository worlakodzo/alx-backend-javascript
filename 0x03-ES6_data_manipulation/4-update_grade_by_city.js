const updateStudentGradeByCity = (studentes, city, newGrades) => studentes.filter((student) => {
  if (student.location === city) {
    return student;
  }
  return false;
}).map((student) => {
  if (student) {
    const grade = 'N/A';
    for (let grade in newGrades) {
      if (grade.studentId === student.id) {
        grade = grade.grade;
      }
    }
    return { ...student, grade };
  }
  return student;
});

export default updateStudentGradeByCity;
