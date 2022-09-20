const {pool} = require("./utils/db");
const {TodoRecord} = require("./records/todo.record");





(async () => {
    // const firstTodoItem = new TodoRecord({
    //     title: 'Zrobić dzień 5, tydzień 4'
    // });
    // const newId = await firstTodoItem.insert();
    // console.log('New item added with ID', newId);
    //
    // await firstTodoItem.delete();

    // const foundTodo = await TodoRecord.find('ca6304b7-fe09-40c6-af82-c0fabaa28ece');
    const foundTodo = await TodoRecord.findAll();
    console.log(foundTodo);
    await pool.end();
})();
