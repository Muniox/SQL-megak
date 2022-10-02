const {pool} = require("../utils/db");
const {ValidationError} = require("../utils/error");
const {v4: uuid} = require("uuid");

class ChildRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError('Imię musi mieć od 3 dp 55 znaków');
        }


        this.id = obj.id;
        this.name = obj.name;
        this.giftId = obj.giftId;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `children`(`id`,`name`) VALUES (:id, :name)", {
            id: this.id,
            name: this.name,
        });
        return this.id;
    }

    async update() {
        await pool.execute("UPDATE `children` SET `children`.`name` = :name,  `children`.`giftId` = :giftId  WHERE `children`.`id` = :id", {
            id: this.id,
            name: this.name,
            giftId: this.giftId
        });
    }

    static async listAll() {
        const [results] = await pool.execute('SELECT * FROM `children` ORDER BY `name` ASC');
        return results.map(obj => new ChildRecord(obj));
    }

    static async getOne(id) {
        const [result] = await pool.execute('SELECT * FROM `children` WHERE `children`.`id` = :id', {
            id,
        });
        return result.length === 0 ? null : new ChildRecord(result[0]);
    }
}

module.exports = {
    ChildRecord
};