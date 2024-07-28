
export default function createIteratorObject(report) {
    const employees = report.allEmployees;
    let employeeList = [];

    for (let employeeNames of Object.values(employees)) {
        employeeNames.forEach((employee) => {
            employeeList.push(employee);
        });
    }
    return employeeList;

}

