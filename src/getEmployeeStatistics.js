/**
 * Counts the number of employees for each workload.
 * @param {Array} employeeArray - array of objects (employee)
 * @returns {Object} - object containing count of employees for each workload(10, 20, 30, 40)
 */

function countEmployeesByWorkload(employeeArray){
    // Initialize counters for each workload
    let count10=0;
    let count20=0;
    let count30=0;
    let count40=0;

    // Iterate through all employees
    for (let i = 0; i < employeeArray.length; i++) {
       
        // Count employees based on their workload
        switch (employeeArray[i].workload) {
            case 10: count10++;
                break;
            case 20: count20++;
                break;
            case 30: count30++;
                break;
            case 40: count40++;
                break;
            default: 
                console.warn(`Unknown workload value: ${employeeArray[i].workload}`);
        }
    }

    // Return object with counts of employees for each workload
    return {
        workload10: count10,
        workload20: count20,
        workload30: count30,
        workload40: count40
    }
}

/**
 * Calculates the age of an employee based on their birthdate.
 * @param {string} employeeBirthDate - employee's birthdate in ISO string
 * @returns {number} - age in years (as a decimal number)
 */
function getAge(employeeBirthDate) {
    // Get current date in milliseconds
    const todayInMS = new Date().getTime();
    
    // Convert birth date to milliseconds
    let birthdateInMS = new Date(employeeBirthDate).getTime();

    // Calculate age from the difference between current date and birth date
    // Converted to years (1000 ms * 60 sec * 60 min * 24 hours * 365.25 days = year)
    return ((todayInMS-birthdateInMS)/(1000*60*60*24*365.25));
}

/**
 * Creates a new array of employees with added age property.
 * @param {Array} employeeArray - array of employee objects with birthdate property
 * @returns {Array} - new array with employee objects including calculated age
 */
function createNewArrayWithAge(employeeArray) {
    // Map through employees and add age property to each one
    return employeeArray.map(employee => ({
        ...employee, // Copy all existing employee properties
        age: getAge(employee.birthdate), // Add calculated age
    }));
}

/**
 * Calculates the average age of all employees.
 * @param {Array} employeesArray - array of objects (employee) with age property
 * @returns {number} Average age rounded to one decimal place
 */
function getAverageAge(employeesArrayWithAge) {
    let sumAge = 0;
    for(let i =0; i < employeesArrayWithAge.length;i++)
    {
        sumAge += employeesArrayWithAge[i].age;
    }
    return Math.round(sumAge/employeesArray.length*10)/10;
}
/**
 * @param {Array} employeesArray - array of objects (employee) with age property
 */
function getMinAge(employeesArray){
    let minAge = Infinity;
    for (let i = 0; i < employeesArray.length; i++) {
        if (minAge > employeesArray[i].age){
            minAge = employeesArray[i].age;
        }
    }
    return Math.floor(minAge);
}
/**
 * @param {Array} employeesArray - array of objects (employee) with age property
 */
function getMaxAge(employeesArray){
    let maxAge = 0;
    for (let i = 0; i < employeesArray.length; i++) {
        if (maxAge < employeesArray[i].age){
            maxAge = employeesArray[i].age;
        }
    }
    return Math.floor(maxAge);
}

/**
 * @param {Array} employeesArray - array of objects (employee) with age property
 */
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
