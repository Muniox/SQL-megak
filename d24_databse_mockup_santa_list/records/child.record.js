class ChildRecord {
    static listAll() {
        return [
            {
                id: 'cdea',
                name: 'Ania',
                gift: 'Domek dla lalek',
            },
            {
                id: 'abcd',
                name: 'Piotrek',
                gift: 'Samochodzik',
            }
        ];
    }
}

module.exports = {
    ChildRecord
};