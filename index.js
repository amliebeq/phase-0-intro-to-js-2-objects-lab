// Write your solution in this file!
const employee = {
    name: "Steven",
    streetAdress: "Hell",
}
function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const copyOfEmployee = {...employeeObject}
    copyOfEmployee[key] = value
    return copyOfEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value
    return employeeObject
}
function deleteFromEmployeeByKey(employeeObject, key) {
    const copyOfEmployeeObject = {...employeeObject}
    delete copyOfEmployeeObject[key]
    return copyOfEmployeeObject
}
function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key]
    return employeeObject
}