export default function iterateThroughObject(reportWithIterator) {
  let employeeListString = '';
  reportWithIterator.forEach((employee) => {
    if (employeeListString) {
      employeeListString += `| ${employee}`;
    } else {
      employeeListString = employee;
    }
  });
  return employeeListString;
}
