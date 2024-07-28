export default function iterateThroughObject(reportWithIterator) {
  const { allEmployees } = reportWithIterator;
  let employeeListString = '';

  for (let employeeNames of Object.values(allEmployees)) {
    employeeNames.forEach((employee) => {
      if (employeeListString) {
        employeeListString += `| ${employee}`;
      } else {
        employeeListString = employee;
      }
    });
  }
  return employeeListString;
}
