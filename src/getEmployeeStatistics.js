/**
 * Counts the number of employees for each workload.
 * @param {Array} employeeArray - array of objects
 * @returns {Object} - object containing count of employees for each workload(10, 20, 30, 40)
 */
function countEmployeesByWorkload(employeeArray) {
  // Initialize counters for each workload
  let count10 = 0;
  let count20 = 0;
  let count30 = 0;
  let count40 = 0;

  // Iterate through all employees
  for (let i = 0; i < employeeArray.length; i++) {
    // Count employees based on their workload
    switch (employeeArray[i].workload) {
      case 10:
        count10++;
        break;
      case 20:
        count20++;
        break;
      case 30:
        count30++;
        break;
      case 40:
        count40++;
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
    workload40: count40,
  };
}

/**
 * Calculates the age of an employee based on their birthdate.
 * @param {string} employeeBirthDate - employee's birthdate in ISO string
 * @returns {number} - age in years rounded to one decimal place
 */
function getAge(employeeBirthDate) {
  // Get current date in milliseconds
  const todayInMS = new Date().getTime();

  // Convert birth date to milliseconds
  let birthdateInMS = new Date(employeeBirthDate).getTime();

  // Calculate age from the difference between current date and birth date
  // Converted to years (1000 ms * 60 sec * 60 min * 24 hours * 365.25 days = year)
  return (todayInMS - birthdateInMS) / (1000 * 60 * 60 * 24 * 365.25);
}

/**
 * Creates a new array of employees with added age property.
 * @param {Array} employeeArray - array of objects with birthdate property
 * @returns {Array} - new array with objects including calculated age
 */
function createNewArrayWithAge(employeeArray) {
  // Map through employees and add age property to each one
  return employeeArray.map((employee) => ({
    ...employee, // Copy all existing employee properties
    age: getAge(employee.birthdate), // Add calculated age
  }));
}

/**
 * Calculates the average age of all employees.
 * @param {Array} employeesArrayWithAge - array of objects with age property
 * @returns {number} - average age rounded to one decimal place
 */
function getAverageAge(employeesArrayWithAge) {
  // Initialize sum of all ages
  let sumAge = 0;

  // Iterate through all employees and sum their ages
  for (let i = 0; i < employeesArrayWithAge.length; i++) {
    sumAge += employeesArrayWithAge[i].age;
  }
  // Calculate average age and round it to one decimal place
  return Math.round((sumAge / employeesArrayWithAge.length) * 10) / 10;
}

/**
 * Finds the minimum age among all employees.
 * @param {Array} employeesArrayWithAge - array of objects with age property
 * @returns {number} - minimum age rounded down to the nearest integer
 */
function getMinAge(employeesArrayWithAge) {
  // Initialize minimum age to infinity for comparison
  let minAge = Infinity;

  // Iterate through all employees to find the youngest
  for (let i = 0; i < employeesArrayWithAge.length; i++) {
    // Compare current minimum with employee's age and update if smaller
    if (minAge > employeesArrayWithAge[i].age) {
      minAge = employeesArrayWithAge[i].age;
    }
  }
  // Round down to nearest integer
  return Math.floor(minAge);
}

/**
 * Finds the maximum age among all employees.
 * @param {Array} employeesArrayWithAge - array of objects with age property
 * @returns {number} - maximum age rounded down to the nearest integer
 */
function getMaxAge(employeesArrayWithAge) {
  // Initialize maximum age to negative infinity for comparison
  let maxAge = -Infinity;
  // Iterate through all employees to find the oldest
  for (let i = 0; i < employeesArrayWithAge.length; i++) {
    // Compare current maximum with employee's age and update if higher
    if (maxAge < employeesArrayWithAge[i].age) {
      maxAge = employeesArrayWithAge[i].age;
    }
  }
  // Round down to nearest integer
  return Math.floor(maxAge);
}

/**
 * Finds the median age of employees.
 * @param {Array} employeesArrayWithAge - array of objects with age property
 * @returns {number} - median age rounded down to the nearest integer
 */
function getMedianAge(employeesArrayWithAge) {
  let medianAge;

  // Sort employees by age in ascending order
  let sortedArrayOfEmployees = employeesArrayWithAge.toSorted(
    (a, b) => a.age - b.age,
  );

  // Check if the array has an odd number of elements
  if (employeesArrayWithAge.length % 2 !== 0) {
    // For odd length, take the middle element
    const middleIndex = Math.floor(employeesArrayWithAge.length / 2);
    medianAge = sortedArrayOfEmployees[middleIndex].age;
  }
  // For even length, calculate average of two middle elements
  else {
    const middleIndex1 = employeesArrayWithAge.length / 2 - 1;
    const middleIndex2 = employeesArrayWithAge.length / 2;
    medianAge =
      (sortedArrayOfEmployees[middleIndex1].age +
        sortedArrayOfEmployees[middleIndex2].age) /
      2;
  }
  // Round down to nearest integer
  return Math.floor(medianAge);
}

/**
 * Finds the median workload of employees.
 * @param {Array} employeesArray - array of objects with workload property
 * @returns {number} - median workload rounded down to the nearest integer
 */
function getMedianWorkload(employeesArray) {
  let medianWorkload;

  // Sort employees by workload in ascending order
  let sortedArrayOfEmployees = employeesArray.toSorted(
    (a, b) => a.workload - b.workload,
  );

  // Check if the array has an odd number of elements
  if (employeesArray.length % 2 !== 0) {
    // For odd length, take the middle element
    const middleIndex = Math.floor(employeesArray.length / 2);
    medianWorkload = sortedArrayOfEmployees[middleIndex].workload;
  } else {
    // For even length, calculate average of two middle elements
    const middleIndex1 = employeesArray.length / 2 - 1;
    const middleIndex2 = employeesArray.length / 2;
    medianWorkload =
      (sortedArrayOfEmployees[middleIndex1].workload +
        sortedArrayOfEmployees[middleIndex2].workload) /
      2;
  }
  // Round down to nearest integer
  return Math.floor(medianWorkload);
}

/**
 * Calculates the average workload of female employees.
 * @param {Array} employeesArray - array of objects  with gender and workload properties
 * @returns {number} - average workload of women rounded to one decimal place
 */
function getAverageWomenWorkload(employeesArray) {
  // Initialize sum of women's workload
  let sumWomenWorkload = 0;
  // Initialize counter for women
  let countWomen = 0;

  // Iterate through all employees
  for (let i = 0; i < employeesArray.length; i++) {
    // Check if employee is female
    if (employeesArray[i].gender === "female") {
      // Add workload to sum
      sumWomenWorkload += employeesArray[i].workload;
      // Increment women counter
      countWomen++;
    }
  }

  // Return 0 if no women found to avoid division by zero
  if (countWomen === 0) {
    return 0;
  }

  // Calculate average and round to one decimal place
  return Math.round((sumWomenWorkload / countWomen) * 10) / 10;
}

/**
 * Sorts employees by their workload in ascending order.
 * @param {Array} employeesArray - array of objects with workload property
 * @returns {Array} - new sorted array of employees (original array remains unchanged)
 */
function sortByWorkload(employeesArray) {
  // Sort employees by workload from lowest to highest
  return employeesArray.toSorted((a, b) => a.workload - b.workload);
}

/**
 * Calculates statistics for employees.
 * @param {Array} employee - array of objects
 * @returns {Object} - object containing all calculated statistics
 */

export function getStatistics(employee) {
  // Return default values if array is empty
  if (employee.length === 0) {
    return {
      total: 0,
      workload10: 0,
      workload20: 0,
      workload30: 0,
      workload40: 0,
      averageAge: 0,
      minAge: 0,
      maxAge: 0,
      medianAge: 0,
      medianWorkload: 0,
      averageWomenWorkload: 0,
      sortedByWorkload: [],
    };
  }
  // Create new array with calculated age for each employee
  const employeeWithAge = createNewArrayWithAge(employee);

  // Calculate workload distribution
  const workloadCounts = countEmployeesByWorkload(employee);

  let averWomenWorkload;
  // Calculate average women workload and check if any women exist
  const womenWorkload = getAverageWomenWorkload(employee);
  // Set message if no women found, otherwise use calculated value
  if (womenWorkload === 0) {
    averWomenWorkload = "No women found.";
  } else {
    averWomenWorkload = womenWorkload;
  }

  // Return object with all statistics
  return {
    total: employee.length,
    workload10: workloadCounts.workload10,
    workload20: workloadCounts.workload20,
    workload30: workloadCounts.workload30,
    workload40: workloadCounts.workload40,
    averageAge: getAverageAge(employeeWithAge),
    minAge: getMinAge(employeeWithAge),
    maxAge: getMaxAge(employeeWithAge),
    medianAge: getMedianAge(employeeWithAge),
    medianWorkload: getMedianWorkload(employee),
    averageWomenWorkload: averWomenWorkload,
    sortedByWorkload: sortByWorkload(employee),
  };
}