class GiftRecord {
    static listAll() {
        return [
            {
                id: 'abc1',
                name: 'Domek dla lalek',
                count: 5,
            },
            {
                id: 'abc2',
                name: 'Samochodzik',
                count: 3,
            }
        ];
    }
}

module.exports = {
    GiftRecord
};