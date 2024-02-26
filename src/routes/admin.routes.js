const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");

// /admin
router.get("/productos", adminController.list);

router.get("/crear-producto", adminController.create);

router.get("/editar-producto", adminController.update);



module.exports = router;