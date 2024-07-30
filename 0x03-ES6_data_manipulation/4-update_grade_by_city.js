const updateStudentGradeByCity = (studentes, city, newGrades) => {
  const newGradesMap = new Map();
  for (const { studentId, grade } of newGrades) {
    newGradesMap.set(studentId, grade);
  }

  const students = studentes.filter((student) => student.location === city);
  return students.map((student) => ({
    ...student,
    grade: newGradesMap.get(student.id) || 'N/A',
  }));
};

export default updateStudentGradeByCity;
