const updateStudentGradeByCity = (studentes, city, newGrades) => studentes.filter((student) => {
  if (student.location === city) {
    return student;
  }
  return null;
}).map((student) => {
  if (student) {
    let grade = 'N/A';
    if (newGrades.has('studentId')) {
      grade = newGrades[student.id];
    }
    return { ...student, grade };
  }
  return student;
});

export default updateStudentGradeByCity;
