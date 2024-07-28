import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const allEmployees = createEmployeesObject('engineering', employeesList);
  return { allEmployees, getNumberOfDepartments: () => Object.keys(allEmployees).length };
}
