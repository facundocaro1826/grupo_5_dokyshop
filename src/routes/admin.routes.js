const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middleware/uploadFiles")

// /admin
router.get("/productos", adminController.list);

router.get("/crear-producto", adminController.create);

router.get("/editar-producto/", adminController.update);
router.put("/editar-producto/:id", uploadProducts.fields([
    { name: "imagePrincipal"}
]), )  



module.exports = router;