const express = require("express");
const router = express.Router();

const productController = require('../controllers/product')

router.get("/", productController.product)  //  /productos
router.get("/detalle-de-producto", productController.detail);
router.get("/panel", productController.dashboard);
router.get("/editar-producto", productController.edit);
router.get("/crear-producto", productController.create);





module.exports = router;