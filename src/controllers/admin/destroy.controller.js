const {saveData, loadData} = require("../../data");
const path = require('path');
const fs = require('fs')

module.exports = (req, res)=>{
    const product = loadData()
    const {id} = req.params;
    
    const producLessOne = product.filter(p => p.id !== +id);
      // traeme todos los productos menos el id que entra por en params
    const prodDestroy = product.find(p => p.id === +id)

    const pathFile = path.join(__dirname, "../../../public/images/products/" + prodDestroy.imagePrimary);

    const pathSecondary = path.join(__dirname, "../../../public/images/products/" + prodDestroy.imagesSecondary)

    const existFile = fs.existsSync(pathFile)
    const existSecondary = fs.existsSync(pathSecondary)

    if(existFile && existSecondary){
      fs.unlinkSync(pathFile)
      fs.unlinkSync(pathSecondary)
    }
    saveData(producLessOne);  // guarda el resto de los productos menos el que entra por el params que se decea eliminar
    
    res.redirect("/admin/productos")
}