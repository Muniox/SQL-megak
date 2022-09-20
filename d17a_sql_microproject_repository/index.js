const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");
const {TodoRepository} = require("./repositories/todo.repository");





(async () => {

    const foundTodo = await TodoRepository.find('7931c687-95f3-4b31-87a5-5de05347065b');
    await TodoRepository.delete(foundTodo);

    await pool.end();
})();
