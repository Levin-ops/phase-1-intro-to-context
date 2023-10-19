// Your code here
function createEmployeeRecord(array){
    const empObj = {
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }

    return empObj;
}

function createEmployeeRecords(arrayOfArrays){
    const employeeRecords = arrayOfArrays.map(employeData => createEmployeeRecord(employeData))
    return employeeRecords
}

  