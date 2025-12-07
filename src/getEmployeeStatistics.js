function countEmployeesByWorkload(employeeArray){
    let count10=0;
    let count20=0;
    let count30=0;
    let count40=0;

    for (let i = 0; i < employeeArray.length; i++) {
        switch (employeeArray[i].workload) {
            case 10: count10++;
                break;
            case 20: count20++;
                break;
            case 30: count30++;
                break;
            case 40: count40++;
                break;
        }
    }
    return {
        workload10: count10,
        workload20: count20,
        workload30: count30,
        workload40: count40
    }
}
function getAge(employeeBirthDate) {
    const todayInMS = new Date().getTime();
    let birthdateInMS = new Date(employeeBirthDate).getTime();
    return ((todayInMS-birthdateInMS)/(1000*60*60*24*365.25));
}
function createNewArrayWithAge(employeeArray) {
    return employeeArray.map(employee => ({
        ...employee,
        age: getAge(employee.birthdate),
    }));

}
function getAverageAge(employeesArray) {
    let sumAge = 0;
    for(let i =0; i < employeesArray.length;i++)
    {
        sumAge += employeesArray[i].age;
    }
    return Math.round(sumAge/employeesArray.length*10)/10;
}
function getMinAge(employeesArray){
    let minAge = Infinity;
    for (let i = 0; i < employeesArray.length; i++) {
        if (minAge > employeesArray[i].age){
            minAge = employeesArray[i].age;
        }
    }
    return Math.floor(minAge);
}
function getMaxAge(employeesArray){
    let maxAge = 0;
    for (let i = 0; i < employeesArray.length; i++) {
        if (maxAge < employeesArray[i].age){
            maxAge = employeesArray[i].age;
        }
    }
    return Math.floor(maxAge);
}
function getMedianAge(employeesArray){
    let medianAge;
    let sortedArrayOfEmployees = employeesArray.toSorted((a, b) => a.age - b.age);

    if (employeesArray.length%2!==0){
        const position = Math.floor(employeesArray.length/2)
        medianAge = sortedArrayOfEmployees[position].age;
    }
    else {
        const position1 = employeesArray.length/2-1;
        const position2 = employeesArray.length/2;
        medianAge = (sortedArrayOfEmployees[position1].age+sortedArrayOfEmployees[position2].age)/2;
    }
    return Math.floor(medianAge);
}
function getMedianWorkload(employeesArray){
    let medianWorkload;
    let sortedArrayOfEmployees = employeesArray.toSorted((a, b) => a.workload - b.workload);

    if (employeesArray.length%2!==0){
        const position = Math.floor(employeesArray.length/2)
        medianWorkload= sortedArrayOfEmployees[position].workload;
    }
    else {
        const position1 = employeesArray.length/2-1;
        const position2 = employeesArray.length/2;
        medianWorkload= (sortedArrayOfEmployees[position1].workload+sortedArrayOfEmployees[position2].workload)/2;
    }
    return Math.floor(medianWorkload);
}
function getAverageWomenWorkload(employeesArray){
    let sumWomenWorkload=0;
    let countWomen=0;
    for (let i = 0; i < employeesArray.length; i++) {
        if (employeesArray[i].gender === "female"){
            sumWomenWorkload += employeesArray[i].workload;
            countWomen ++;
        }
    }
    return Math.round(sumWomenWorkload/countWomen*10)/10;

}

function sortByWorkload(employeesArray){
    return (employeesArray.toSorted((a, b) => a.workload - b.workload))
}

export function getStatistics (employee) {
  const employeeWithAge = createNewArrayWithAge(employee);
    return {
        total: employee.length,
        workload10: countEmployeesByWorkload(employee).workload10,
        workload20: countEmployeesByWorkload(employee).workload20,
        workload30: countEmployeesByWorkload(employee).workload30,
        workload40: countEmployeesByWorkload(employee).workload40,
        averageAge: getAverageAge(employeeWithAge),
        minAge: getMinAge(employeeWithAge),
        maxAge: getMaxAge(employeeWithAge),
        medianAge: getMedianAge(employeeWithAge),
        medianWorkload: getMedianWorkload(employee),
        averageWomenWorkload:getAverageWomenWorkload(employee),
        sortedByWorkload:sortByWorkload(employee),
    }
}
