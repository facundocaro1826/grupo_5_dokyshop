const express = require("express");
const router = express.Router();

const usersController = require('../controllers/users')

//usuario
router.get("/iniciar", usersController.login);   //   
router.get("/registro", usersController.register);



module.exports = router;