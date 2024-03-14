const { loadData, saveData } = require("../../data");
const path = require('path');
const fs = require('fs');

module.exports = (req,res) => {
    const products = loadData()
    const { id } = req.params;
    const { title, categorySelect, description, price, sale, stock, color } = req.body

    let newImages = [];
    if(req.files.imagesSecondary?.length) {
        newImages = req.files.imagesSecondary?.map((img) => img.filename)
    }
    

    const productsMap = products.map((p) => {
        if (p.id === +id) {
            const productEdited = {
                ...p,
                title: title.trim(),
                categorySelect: categorySelect?.trim(),
                description: description.trim(),
                price: +price,
                sale: +sale,
                stock: +stock,
                color: color.trim(),
                imagePrimary: req.files.imagePrimary?.length ? req.files.
                imagePrimary[0]?.filename : p.imagePrimary,
                imagesSecondary: newImages.length ? newImages : p.imagesSecondary
            };
            const oldImgPath = path.join(__dirname, "../../../public/images/products/" + p.imagePrimary)
            const existOldImg = fs.existsSync(oldImgPath)
            if (existOldImg) {
                if (req.files.imagePrimary?.length) {
                    if (productEdited.imagePrimary === req.files.imagePrimary[0]?.filename) {
                            fs.unlinkSync(oldImgPath)
                    }
                }
            }
            

            for (let i = 0; i < p.imagesSecondary.length; i++) {
                let imgSecondary =  p.imagesSecondary[i];
                let OldImgSecondaryPath = path.join(__dirname, "../../../public/images/products/" + imgSecondary)
                let existOldSecondaryImg = fs.existsSync(OldImgSecondaryPath)
                if (existOldSecondaryImg) {
                    if(newImages.length) {
                        fs.unlinkSync(OldImgSecondaryPath)
                    }
                } 
            }
            return productEdited
        }
        return p;
    });

    saveData(productsMap);

    res.redirect("/admin/productos")

}