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

function createTimeInEvent(employee, dateStamp){
    const [date, time] = dateStamp.split(' ');
    employee.timeInEvents.push({
        type: `TimeIn`,
        hour: parseInt(time),
        date: date,
    })

    return employee;
}

function createTimeOutEvent(employee, dateStamp){
    const [date, time] = dateStamp.split(' ');
    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time),
        date: date,
    })
    return employee;
}

function hoursWorkedOnDate(employee, date){
    const timeInEvent = employee.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employee.timeOutEvents.find(event => event.date === date);
    const hoursWorking = (timeOutEvent.hour - timeInEvent.hour)/100;

    return hoursWorking
}

function wagesEarnedOnDate(employee, date){
    const workingHours = hoursWorkedOnDate(employee, date);
    return workingHours * employee.payPerHour;
}

function allWagesFor(employee){
    const workingDates = employee.timeInEvents.map(event => event.date);
    const totalPay = workingDates.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0)
    return totalPay;
}

function calculatePayroll(employees){
    return employees.reduce((totalWages,employee) => totalWages + allWagesFor(employee),0)
}