const mongo = require('mongodb');

//nie wiem czemu, ale nie działa jak wpisze localhost :/
const client = new mongo.MongoClient('mongodb://127.0.0.1:27017');

(async() => {
    await client.connect();

    const db = client.db('megak_music');

    const songs = db.collection('songs');

    console.log(songs.find());

    await client.close();

})();
