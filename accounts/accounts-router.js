const router = require('express').Router();
const db = require('./accounts-model');

router.get('/', (req, res) => {
    db.get()
    .then(payload => {
        res.status(200).json(payload);
    })
    .catch(error => handleError(error, res))
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    db.getById(id)
    .then(payload => {
        if(payload) {
            res.status(200).json(payload);
        } else {
            res.status(404).json({ error: 'Account with that Id was not found' });
        }
    })
    .catch(error => handleError(error, res))
})

function handleError(error, res) {
    return res.status(500).json({ error: error })
}

module.exports = router;