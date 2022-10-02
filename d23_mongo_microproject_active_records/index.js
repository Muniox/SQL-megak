const {client} = require('./utils/db');
const {TodoRecord} = require("./records/todo.record");
const {ObjectId} = require("mongodb");

(async () => {

    try {
        const todo = await TodoRecord.find('633a02554b6d9e4880c7f532');
        // console.log(await TodoRecord.findAll());
        console.log(todo);
        //dzięki Active Record możemy sobie pracować od razu na recordzie np:
        //zmian dokonujemy na naszych obiektach, anie nie jak to było na repozytorium (repository pattern)
        // todo.title = "Rozpocząć projekt na zakończenie etapu z bazami.";
        // await todo.update()
        //await todo.delete

        //za pomocą kursora
        // for await (const todo of await TodoRecord.findAllWithCursor()) {
        //     const record = new TodoRecord(todo);
        //     record.title += '[updated]';
        //     await record.update();
        // }


    } finally {
        await client.close();
    }

})();

//14:00