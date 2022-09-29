const mongo = require('mongodb');
const {ObjectID} = require("mongodb");

//nie wiem czemu, ale nie działa jak wpisze localhost :/
const client = new mongo.MongoClient('mongodb://127.0.0.1:27017');

(async() => {
    await client.connect();

    const db = client.db('megak_test');

    const users = db.collection('users');

    const foundUsers = users.find();
    //wyświetla nam rekord
    // console.log(await foundUsers.next());

    //Wyświetla rekord i sprawdza czy mamy następny
    // console.log(await foundUsers.hasNext());

    //zlicza nam ile mamy rekordów
    // console.log(await foundUsers.count());

    //wyświetla nam wszystkie rekordy w tablicy
    // console.log(await foundUsers.toArray());

    //wyświetlenie w pętli forOf z async
    // for await (const user of foundUsers) {
    //     console.log(user._id.toString());
    //     console.log(String(user._id));
    //     console.log(user._id + '');
    // }

    //znalezienie jednego użytkownika po Id
    const oneUser = await db.collection('users').findOne({_id: mongo.ObjectId('631e24cd74ef7736e01b209c')});
    console.log(oneUser);
    await client.close();


})();
