const express = require("express");
const router = express.Router();

const productsController = require('../controllers/products')

// /productos
router.get("/detalle", productsController.detail);


module.exports = router;