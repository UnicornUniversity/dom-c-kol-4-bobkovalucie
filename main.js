import {
   generateData,
   dtoIn
}from './src/generateEmployeeData.js'

import {
  getStatistics
}from './src/getEmployeeStatistics.js'

/**
 * The main function which generates employee data and calculates their statistics.
 * @param {object} dtoIn - contains count of employees, age limit of employees {min, max}
 * @returns {object} - object containing the statistics
 */
export function main(dtoIn) {
  const dtoOut = getEmployeeStatistics(generateEmployeeData(dtoIn));
  return dtoOut;
}

/**
 * Generates employee data based on provided parameters.
 * @param {object} dtoIn - contains count of employees, age limit of employees {min, max}
 * @returns {Array} - array of generated employee objects
 */
export function generateEmployeeData(dtoIn) {
   const dtoOut  = generateData(dtoIn)
   return dtoOut;
}

/**
 * Calculates statistics for a given array of employees.
 * @param {Array} employees - array containing all the employee objects with their attributes
 * @returns {object} - object containing all calculated statistics 
 */
export function getEmployeeStatistics(employees) {
   const dtoOut = getStatistics(employees)
  return dtoOut;
}
