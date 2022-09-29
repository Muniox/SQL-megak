const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {
    await client.connect();

    /** dodaj bazę megak_music2 */
    const db = client.db('megak_music2');

    /** dodaj kolekcję songs */
    // await db.createCollection('songs');

    /** Dodaj kilka piosenek. Każda powinna zawierać tytuł, wykonawcę i długość w sekundach. */
    // const songs = [
    //     {
    //         title: 'Kod',
    //         artist: 'Tau',
    //         length: 230,
    //     },
    //     {
    //         title: 'Na cały świat',
    //         artist: 'Sokół',
    //         length: 300,
    //     },
    //     {
    //         title: 'Vagarant',
    //         artist: 'Feint',
    //         length: 310,
    //     }
    // ];
    //
    // await db.collection('songs').insertMany(songs);

    /** Wyświetl wszystkie piosenki. */
    for await (const song of db.collection('songs').find()) {
        console.log(song);
    }

    /** wyszukaj piosenki danego artysty */
    const artist = await db.collection('songs').find({
        artist: String('Tau'),
        // lub artist: { $eq: 'Tau', }
    }).toArray();
    console.log(artist);

    await client.close();


})();
