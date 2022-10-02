const { Router } = require("express");
const { GiftRecord } = require("../records/gift.record");
const giftRouter = Router();
// const { v4 } = require("uuid");

giftRouter
    .get('/', async (req, res) => {
        const giftList = await GiftRecord.listAll();
        res.render('gift/list', {
            giftList,
        });
    })

    .post('/', async (req, res) => {
        const data = {
            ...req.body,
            count: Number(req.body.count)
        };
        const newGift = new GiftRecord(data);
        await newGift.insert();
        res.redirect('/gift');
    });


module.exports = {
    giftRouter
};