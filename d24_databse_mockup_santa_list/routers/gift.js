const { Router } = require("express");
const { GiftRecord } = require("../records/gift.record");
const giftRouter = Router();


giftRouter
    .get('/', (req, res) => {
        const giftList = GiftRecord.listAll();
        res.render('gift/list', {
            giftList,
        });
    });


module.exports = {
    giftRouter
};