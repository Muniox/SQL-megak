const {MongoClient, ObjectId} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {
    await client.connect();

    const db = client.db('megak_test');

    //NoSQL injection przykład:
    //zamiast: const email = "abc@onet.pl" będzie const email = {$ne: ""}

    const email = {$ne: ""};

    for await (const user of db.collection('users').find({
        email
    })) {
        console.log(user);
    }

    //aby zapobiegać
    for await (const user of db.collection('users').find({
        email: String(email),
    })) {
        console.log(user);
    }


    await client.close();


})();
