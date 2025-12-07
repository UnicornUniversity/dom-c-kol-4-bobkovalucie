// Load static arrays containing all available Czech names and surnames.

const maleNames = [
    "Jan", "Petr", "Josef", "Pavel", "Martin", "Tomáš", "Jaroslav",
    "Miroslav", "Jiří", "Karel", "Lukáš", "Václav", "Ondřej", "Michal",
    "Roman", "David", "Eduard", "Antonín", "Samuel", "Hynek", "Tadeáš",
    "Oldřich", "Rudolf", "Branislav", "Leoš"
];

 const femaleNames = [
    "Marie", "Jana", "Eva", "Anna", "Hana", "Lucie", "Kateřina", "Tereza",
    "Petra", "Lenka", "Veronika", "Markéta", "Monika", "Alena", "Barbora",
    "Klára", "Michaela", "Adéla", "Karolína", "Zuzana", "Helena", "Eliška",
    "Kristýna", "Daniela", "Ivana"
];

const maleSurnames = [
    "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera",
    "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek",
    "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman",
    "Kolář", "Navrátil", "Čermák", "Vaněk"
];

 const femaleSurnames = [
    "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková",
    "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pospíšilová",
    "Pokorná", "Hájková", "Jelínková", "Růžičková", "Benešová", "Fialová",
    "Sedláčková", "Doležalová", "Zemanová", "Kolářová", "Navrátilová",
    "Čermáková", "Vaňková"
];

/**
 * Functions for generating employee data (name, surname, birthdate, workload, etc.).
 */

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - the minimum possible value.
 * @param {number} max - the maximum possible value.
 * @returns {number} - the randomly generated integer.
 */
function getRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Randomly determines the employee's gender.
 * @returns {string} - the generated gender ("male" or "female").
 */
 function setEmployeeGender() {
    const genderNumber = getRandom(0, 1);
    if (genderNumber === 1) {
        return "male";
    }
    else {
        return "female";
    }
}

/**
 * Returns randomly selected name from the list of male/female names based on the gender.
 * @param {string} gender - the gender of the employee.
 * @returns {string} - the randomly selected first name.
 */
function generateName (gender){
    if(gender === "male"){
        return maleNames[getRandom(0, maleNames.length-1)];
        }
    else{
        return femaleNames[getRandom(0, femaleNames.length-1)];
    }
}

/**
 * Returns randomly selected surname from the list of male/female surnames based on the gender.
 * @param {string} gender - the gender of the employee.
 * @returns {string} - the randomly selected surname.
 */
function generateSurname (gender){
    if(gender === "male"){
        return maleSurnames[getRandom(0, maleSurnames.length-1)];
    }

    else{
        return femaleSurnames[getRandom(0, femaleSurnames.length-1)];
    }
}

/**
 * Randomly determines the employee's workload (10, 20, 30, 40 hours/week).
 * @returns {number} - the generated workload in hours/week.
 */
function setWorkload(){
    return (getRandom(1, 4)*10);  // Multiplies random number (1 to 4) by 10
}

/**
 * Generates a random birthdate within the specified age range, returned as an ISO Date-Time string.
 * Removes the used day from possibleDays array to ensure uniqueness.
 * @param {number} minAge - minimum age constraint.
 * @param {number} maxAge - maximum age constraint.
 * @param {Array} possibleDays - array of available days to choose from (modified in place).
 * @returns {string} - the generated birthdate in ISO format.
 */

function generateBirthdate(minAge, maxAge, possibleDays){
    // Check if there are any days left
    if (possibleDays.length === 0) {
        throw new Error('No more unique birthdates available');
    }
    
    const today = new Date();   // Get current date
    today.setUTCHours(0, 0, 0, 0);  // Set time to midnight
   
    // Select random position in the array
    const randomPosition = getRandom(0,possibleDays.length - 1);
    const randomDay = possibleDays[randomPosition];

    // Remove used day by swapping with last element and popping
    possibleDays[randomPosition] = possibleDays[possibleDays.length-1];
    possibleDays.pop();


    // Create birthdate by subtracting random days from today
    const birthdate = new Date(today);
    birthdate.setDate(today.getDate() - randomDay);

    // Return date in ISO 8601 format
    return birthdate.toISOString();
}


/**
 * Creates a single Employee object with all fields randomly generated.
 * @param {number} minAge - minimum age constraint.
 * @param {number} maxAge - maximum age constraint.
 * @param {Array} possibleDays - array of available days to choose from.
 * @returns {object} - the generated Employee object.
 */
function generateEmployee(minAge, maxAge, possibleDays){

    // Initial employee object structure
    const employee = {
        gender: undefined,
        name: undefined,
        surname: undefined,
        birthdate: undefined,
        workload: undefined,
    }

    employee.gender = setEmployeeGender();
    employee.name = generateName(employee.gender);
    employee.surname = generateSurname(employee.gender);
    employee.birthdate = generateBirthdate(minAge, maxAge, possibleDays);
    employee.workload = setWorkload();

    return employee;
}

const dtoIn = {
    count: 50,
    age: {
        min: 35,
        max: 85
    }
};

/**
 * Generates a list of employees with randomly generated data.
 * Every employee has gender, name, surname, birthdate and workload.
 * The birthdate is generated to match the age limit specified in the input (dtoIn.age.min and dtoIn.age.max).
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

export function generateEmployeeData(dtoIn) {
     const dtoOut = [];
    
   // Generate array of all possible days in the age range
    const availableDays = [];
    const minDays = Math.floor(dtoIn.age.min * 365.25);
    const maxDays = Math.floor(dtoIn.age.max * 365.25);
    
    for (let i = minDays; i <= maxDays; i++) { 
        availableDays.push(i);
    }

    
// Generate the requested number of employees
    for (let i = 0; i < dtoIn.count; i++) {
        dtoOut.push(generateEmployee(dtoIn.age.min, dtoIn.age.max, availableDays));
    }
    return dtoOut;
}
