const mysql = require('mysql2/promise');

(async () => {
    const conn = await mysql.createPool(
        {
            host: 'localhost',
            user: 'root',
            password: '<3database^_^',
            database: 'megak_cars',
            connectionLimit: 20,
            //należy dodać, żeby mieć zamiast stringów liczbę, przy większych liczbach po przecinku można stracić dokładność
            decimalNumbers: true,
            //żeby w zapytaniach wykonywało się kilka zapytań
            multipleStatements: true,
            namedPlaceholders: true
        }
    );

    //SQL injection, możemy podać w registrationNo: '" OR "" = "'
    // const registrationNo = 'WML11135';
    const registrationNo = '" OR "" = "'; //wyświetli nam wszystko

    //złośliwe query
    // const registrationNo = '"; DROP TABLE `cars`; SELECT "'

    // const [result] = await conn.execute('SELECT * FROM `cars` WHERE `registrationNo` = "'+ registrationNo +'";');
    // console.log(result);

    /****
    *   to co wyszło:
    *   SELECT * FROM `cars` WHERE `registration` = "" OR "" = "";
    *   SELECT * FROM `cars` WHERE `registrationNo` = ""; DROP TABLE `cars`; SELECT "";
    ***/

    //jak się przed tym obronić:
    // const [result] = await conn.execute(
    //     'SELECT * FROM `cars` WHERE `registrationNo` = ?;',
    //     [registrationNo]
    //     );
    //
    // console.log(result);

    //używanie wielokrotnie tej samej zmiennej:
        //należy odblokować namedPlaceholders: true
    // const value = 1000;
    // const {affectedRows} = await conn.execute(
    //     'UPDATE `cars` SET `price` = `price` + :value WHERE `price` > :value;',
    //     {value}
    //     )[0];
    // console.log(affectedRows);

    /***
     *  prepared statements jest szybsze
     *  jak je wykonać pokazano poniżej
     *
     *
     * */

    const cars = [
        {
            ID: null,
            registrationNo: 'SJZ7CC6',
            brand: 'Jaguar',
            model: 'X-Type',
            color: 'black metalic',
            price: 12000,
            firstRegistrationAt: '2001-07-20',
            placeId: null,
        },
        {
            ID: null,
            registrationNo: 'SJZ7GG6',
            brand: 'Łada',
            model: 'Łada',
            color: 'white',
            price: 1000,
            firstRegistrationAt: '2001-02-20',
            placeId: null,
        }
    ];

    const statement = await conn.prepare('INSERT INTO `cars` VALUES (?,?,?,?,?,?,?,?);');

    try {
        for (const car of cars) {
            await statement.execute(Object.values(car));
        }
        console.log('Działa!');
    } finally {
        statement.close();
    }
})();

/***
 *  Można mieć wiele połączeń z naszego serwera do bazy danych
 *  zamiast createConnection robimy createPool
 *  zamiast conn używamy zmiennej pool !!!!!
 *  Dzięki temu będziemy mieli większą przepustowość
 *
 * */





