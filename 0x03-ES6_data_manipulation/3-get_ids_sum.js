function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((idsSum, student) => idsSum + student.id, 0);
}

export default getStudentIdsSum;
