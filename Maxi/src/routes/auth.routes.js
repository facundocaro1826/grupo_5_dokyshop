const express = require("express");
const router = express.Router();

const authController = require('../controllers/authentication')

// /autentication
router.get("/iniciar", authController.login);   //   
router.get("/registro", authController.register);



module.exports = router;