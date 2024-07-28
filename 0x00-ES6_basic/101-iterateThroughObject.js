export default function iterateThroughObject(reportWithIterator) {
  let employeeListString = '';
  reportWithIterator.forEach((employee) => {
    if (employee) {
      employeeListString += `| ${employee}`;
    } else {
      employeeListString = employee;
    }
  });
  return employeeListString;
}
