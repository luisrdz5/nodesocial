const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', function (req, res) {
    const lista = Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        })
})
router.get('/:id', function (req, res) {
    const lista = Controller.get(req.params.id)
    .then((user) => {
        response.success(req, res, user, 200);
    })
    .catch((err) => {
        response.error(req, res, err.message, 500);
    });
});
router.post('/', function (req, res) {
    console.log(req.body);
    const lista = Controller.post(req.body)
    .then((user) => {
        response.success(req, res, `user created: ${user}`, 200);
    })
    .catch((err) => {
        response.error(req, res, err.message, 500);
    });
});
router.delete('/:id', function (req, res) {
    const lista = Controller.remove(req.params.id)
    .then((id) => {
        response.success(req, res, `user deleted: ${id}`, 200);
    })
    .catch((err) => {
        response.error(req, res, err.message, 500);
    });
});

module.exports = router;
