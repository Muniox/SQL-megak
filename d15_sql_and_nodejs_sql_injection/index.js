const mysql = require('mysql2/promise');
const {v4: uuid} = require('uuid');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '<3database^_^',
    database: 'megak_courses',
    namedPlaceholders: true,
    decimalNumbers: true
});

// ( async () => {
    //Wyświetl wszystkie kursy, jakie mamy dostępne
//     const [result] = await pool.execute('SELECT `name` FROM `courses`');
//     console.log(result);
//     await pool.end();
// })();
//==========================================================================

//Wszyscy kursami, którzy mają 18 lat wraz z nazwą kursu
// ( async () => {
//     const [adultStudentsAndCourses] = await pool.execute('SELECT `students`.`id`, `students`.`firstName`, `students`.`lastName`, `courses`.`name` FROM `students` LEFT JOIN `students_courses` ON `students`.`id` = `students_courses`.`studentId` LEFT JOIN `courses` ON `students_courses`.`courseName` = `courses`.`name` WHERE `students`.`age` >= 18');
//     console.log(adultStudentsAndCourses);
//     await pool.end();
// })();

//==========================================================================
//Usuwamy wszystkich kursantów, którzy są niepełnoletni - Skorzystaj z parametrów
// ( async () => {
//     const age = 18;
//     const {affectedRows} = (await pool.execute(
//         'DELETE FROM `students` WHERE `students`.`age` < :age',
//         {age}
//         ))[0];
//     console.log(affectedRows);
//     await pool.end();
// })();

//===========================================================================
( async () => {

    const student = {
        id: uuid(),
        firstName: 'John3',
        lastName: 'Brite',
        age: 11,
        addressStret: 'Long Bridge'
    };

    const {affectedRows} = (await pool.execute('INSERT INTO `students`(`id`, `firstName`, `lastName`, `age`, `addressStret`) VALUES(:id, :firstName, :lastName, :age, :addressStret)', {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        age: student.age,
        addressStret: student.addressStret
    }))[0];
    console.log(affectedRows, student.id);
    await pool.end();
})();