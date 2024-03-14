const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middleware/uploadFiles")
// /admin
router.get("/productos", adminController.list);
router.get("/productos/buscar", adminController.search)

router.get("/crear-producto", adminController.create);
router.post("/crear-producto",uploadProducts.fields([
    { name: "imagePrimary", maxCount: 1}, 
    { name:"imagesSecondary", maxCount: 1 }]),
     adminController.store);


router.get("/editar-producto/:id", adminController.edit);
router.put("/editar-producto/:id", uploadProducts.fields([
    { name: "imagePrimary", maxCount: 1 },
    { name: "imagesSecondary", maxCount: 1 }
]), adminController.update);  



router.get('/eliminar', adminController.deleteProduct)  // "/admin/eliminar"
router.delete('/eliminar/:id', adminController.destroy) // "/admin/eliminar-producto"
   



module.exports = router;