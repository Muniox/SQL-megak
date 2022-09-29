const {MongoClient, ObjectId} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {
    await client.connect();

    const db = client.db('megak_test');


    const result = await db.collection('users').updateOne({
        _id: ObjectId('631e25f774ef7736e01b209e')
    }, {
        $set: {
            firstName: 'Testowa',
            lastName: 'Osoba'
        },
        $inc: {
            yearOfJoin: 1,
        }
    });
    console.log(result.modifiedCount);

    await client.close();

})();
