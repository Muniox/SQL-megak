const mysql = require('mysql2/promise');

(async () => {
    const conn = await mysql.createPool(
        {
            host: 'localhost',
            user: 'root',
            password: '<3database^_^',
            database: 'megak_cars',
            connectionLimit: 20,
        }
    );

    //select
    // const [results] = await conn.execute('SELECT * FROM `cars` WHERE `registrationNo` = "WML11135";');
    // console.log(results[0].firstRegistrationAt instanceof Date);

    //update
    //affected rows zwróci nam true, jeśli zostanie jakaś encja edytowana, usunięta
    // const {affectedRows} = (await conn.execute('UPDATE `cars` SET `price` = `price` + 1000 WHERE `registrationNo` = "WML11135";'))[0];
    // console.log(affectedRows);

    //insert
    const {affectedRows} = (
        await conn.execute(
            'INSERT INTO `cars` VALUES (?, ?, ?, ?, ?, ?, ? ,?);',
            [null, 'WML2222', 'Fiat', 'Bravo', 'cherry metalic', 30000.00, '2010-02-02', null]
        )
    )[0];
    console.log(affectedRows);
})();



