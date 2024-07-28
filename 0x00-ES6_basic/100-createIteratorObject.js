export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeList = [];

  for (const employeeNames of Object.values(employees)) {
    employeeNames.forEach((employee) => {
      employeeList.push(employee);
    });
  }
  return employeeList;
}
