const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middleware/uploadFiles")

const { uploadProducts } = require('../middleware/uploadFiles')

// /admin
router.get("/productos", adminController.list);

router.get("/crear-producto", adminController.create);
router.post("/crear-producto",uploadProducts.fields([
    { name: "imagePrimary", maxCount: 1}, 
    { name:"imagesSecondary", maxCount: 3 }]),
     adminController.store);


router.get("/editar-producto/", adminController.update);
router.put("/editar-producto/:id", uploadProducts.fields([
    { name: "imagePrincipal"}
]), )  



router.get('/eliminar', adminController.deleteProduct)  // "/admin/eliminar"
router.delete('/eliminar/:id', adminController.destroy) // "/admin/eliminar-producto"
   



module.exports = router;