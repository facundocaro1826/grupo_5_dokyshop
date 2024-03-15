const express = require("express");
const router = express.Router();

const productsController = require('../controllers/products')

// /productos
router.get("/detalle/:id", productsController.detail); 
router.get("/listado-home", productsController.listHome);

module.exports = router;