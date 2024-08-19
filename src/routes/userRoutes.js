let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.get('/:id', (req, res) => {
    Controllers.userController.getUserById(req.params.id, res);
})

router.post('/', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

module.exports = router;