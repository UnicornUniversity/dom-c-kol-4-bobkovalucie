

export function getEmployeeStatistics (employee) {
  const emplo.yeesArrayWithAge = createNewArrayWithAge(employee);
    return {
        total: dtoIn.count,
        workload10: countEmployeesByWorkload(employee).workload10,
        workload20: countEmployeesByWorkload(employee).workload20,
        workload30: countEmployeesByWorkload(employee).workload30,
        workload40: countEmployeesByWorkload(employee).workload40,
        averageAge: getAverageAge(employeesArrayWithAge),
        minAge: getMinAge(employeesArrayWithAge),
        maxAge: getMaxAge(employeesArrayWithAge),
        medianAge: getMedianAge(employeesArrayWithAge),
        medianWorkload: getMedianWorkload(employee),
        averageWomenWorkload:getAverageWomenWorkload(employee),
        sortedByWorkload:sortByWorkload(employee),
    }
}
