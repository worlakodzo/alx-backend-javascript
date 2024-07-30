function getStudentsByLocation(students, city) {
  const studentsByLocation = students.filter((student) => {
    if (student.location === city) {
      return student;
    }
    return false;
  });
  return studentsByLocation;
}
export default getStudentsByLocation;
