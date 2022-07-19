const employee = {
    name: "Jeff",
    streetAddress: "5954 Summerfield Street",
};

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return {
//         ...employee,
//         [key]: value,
//     };
// };

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
// };

// function deleteFromEmployeeByKey(employee, key) {
//     const newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// };

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = {
        ...employee,
        [key]: value,
    };
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}