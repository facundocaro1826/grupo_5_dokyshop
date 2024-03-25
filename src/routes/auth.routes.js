const express = require("express");
const router = express.Router();
const {uploadRegister} = require('../middleware/uploasRegister')

const authController = require('../controllers/authentication');
const { loginValidation, registerValidation } = require("../middleware/validation/auth.validation");


// /autenticacion
router.get("/iniciar", authController.login); 
router.post("/iniciar",loginValidation, authController.loginProcess) // /autenticacion/iniciar


router.get("/registro", authController.register);   // autenticacion/registro
router.post("/registro", uploadRegister.fields([{name: 'avatar'}]), registerValidation,authController.registerProcess)


module.exports = router;