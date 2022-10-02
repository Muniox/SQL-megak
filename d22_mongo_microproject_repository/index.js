const {client} = require('./utils/db');
const {TodoRepository} = require("./repositories/todo.repository");
const {TodoRecord} = require("./records/todo.record");
const {ObjectId} = require("mongodb");

(async () => {

    try {
        // const todo = new TodoRecord({
        //     title: 'skończyć projekt mongodb',
        // });
        // await TodoRepository.insert(todo);

        // console.log(await TodoRepository.findAll());

        console.log(await TodoRepository.find('633a02554b6d9e4880c7f532'));
        // const todo = await TodoRepository.find('633a02554b6d9e4880c7f532');
        // await TodoRepository.delete(todo);
    } finally {
        await client.close();
    }

})();

//14:00