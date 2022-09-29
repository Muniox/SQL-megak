const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

(async() => {
    await client.connect();

    /** dodaj lub wybierz bazę megak_music2 */
    const db = client.db('megak_music2');


    /** Dodaj do kolekcji artist 3 dokumenty. które zawierają nazwę artysty oraz datę rozpoczęcia działalności artystycznej */
    const artist = [
        {
            name: 'Tau',
            startedAt: new Date('2010-01-01 12:00'),
        },
        {
            name: 'Sokół',
            startedAt: new Date('2001-01-01 12:00'),
        },
        {
            name: 'Feint',
            startedAt: new Date('2015-01-01 12:00'),
        },
    ];

    await db.collection('artist').insertMany(artist);

    /** Usuń z wszystkich dokumentów w kolekcji songs pole artist  */
    await db.collection('songs').updateMany({}, {
        $unset: {
            artist: '',
        }
    });


    /** Usuń wszystkich artystów, którzy rozpoczęli działalność więcej niż sto lat  */
    await db.collection('artist').deleteMany({
        startedAt: {
            $lt: new Date('1921-11-15 16:15')
        }
    }, {});


    /** Powiąż piosenki z artystami. Po prostu dodaj w dokumentach songs pole. odwołujące się do id w artist */
    //tego nie przerobiliśmy z Kubą


    await client.close();
})();
