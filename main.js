import {
   generateEmployeeData,
   dtoIn
}from './src/generateEmployeeData.js'

import {
  getEmployeeStatistics
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


