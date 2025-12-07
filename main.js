import {
   generateData,
   dtoIn
}from './src/generateEmployeeData.js'

import {
  getStatistics
}from './src/getEmployeeStatistics.js'


//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {object} containing the statistics
 */
export function main(dtoIn) {
  dtoOut = getEmployeeStatistics(generateEmployeeData(dtoIn));
  return dtoOut;
}


/**
 * Please, add specific description here 
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function generateEmployeeData(dtoIn) {
 dtoOut = generateData(dtoIn)
 return dtoOut;
}

/**
 * Please, add specific description here 
 * @param {Array} employees containing all the mocked employee data
 * @returns {object} statistics of the employees
 */
export function getEmployeeStatistics(employees) {
  //TODO code
  //let dtoOut = exGetEmployeeStatistics(employees);
   dtoOut= getStatistics(employees)
  return dtoOut;
}
