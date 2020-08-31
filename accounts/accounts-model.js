const db = require ('../data/dbConfig');

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}

function get() {
    return db('accounts')
}

function getById(id) {
    return db('accounts')
    .where({ id: id })
    .first()
}

function create(account) {
    return db('accounts')
    .insert(account, 'id')
    .then(payload => {
        return getById(payload)
    })
}

function update(changes, id) {
    return db('accounts')
    .where({ id: id })
    .update(changes)
}

async function remove(id) {
    const removed = await getById(id);

    return db('accounts')
    .where({ id: id })
    .del()
    .then(() => removed)
}