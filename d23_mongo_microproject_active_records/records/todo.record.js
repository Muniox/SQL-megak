const {ObjectId} = require("mongodb");
const {todos} = require("../utils/db");

class TodoRecord {
    constructor(obj) {
        this._id = ObjectId(obj._id);
        this.title = obj.title;

        this._validate();
    }

    _validate() {
        if (this.title.trim() < 5) {
            throw new Error('Todo Title should be at least 5 characters.');
        }

        if (this.title.length > 150) {
            throw new Error('Todo title should be at most 150 characters.');
        }
    }

    async insert() {
        const {insertedId} = await todos.insertOne({
            _id: this._id,
            title: String(this.title),
        });//zamiast this w insertOne
        this._id = insertedId;

        return insertedId;
    }

    async delete() {
        await todos.deleteOne({
            _id: this._id,
        });
    }

    //nie dotyczy jakiegoś konkretnego obiektu więc możemy dać static
    static async find(id) {
        const item = await todos.findOne({_id: ObjectId(String(id))});
        return item === null ? null : new TodoRecord(item);
    }

    //nie dotyczy jakiegoś konkretnego obiektu więc możemy dać static
    static async findAll() {
        return (await (await todos.find()).toArray()).map(obj => new TodoRecord(obj));
    }

    static async findAllWithCursor() {
        return /* await */ todos.find();
    }

    async update() {
        await todos.replaceOne({
            _id: this._id
        }, {
            title: String(this.title)
        });
    }
}

//W Active Directory INSERT, DELETE, UPDATE, SAVE, będą niestatyczne. Natomiast find One czy find all będą statyczne

module.exports = {
    TodoRecord
};