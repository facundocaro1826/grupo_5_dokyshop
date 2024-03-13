const { loadData, saveData } = require('../../data');

module.exports = (req, res) => {
   
    const {title, categorySelect, description, price, sale, stock, color} = req.body;
       
    const products = loadData();
        
    const newId = products[products.length - 1].id + 1;

    let newImages = [];
    if(req.files.imagesSecondary?.length){
        newImages = req.files.imagesSecondary.map(img => img.filename)
    } 
    
    const newProduct = {
        id: newId,
        title: title.trim(),
        categorySelect: categorySelect?.trim(), 
        description: description.trim(),             // trim() quita los espacios(delante, entre y final de una palabra)
        price: +price,
        sale: +sale,
        stock: +stock,
        color: color.trim(),
        imagePrimary: req.files.imagePrimary?.length ? req.files.imagePrimary[0]?.filename : "no-image.png",
        imagesSecondary: newImages.length ? newImages : ["no-image.png"]    
        };
    products.push(newProduct);
    saveData(products);
        
    res.redirect(`/admin/productos`)},

        (err, contentView) => {
        err && res.send(err.message)
        res.render("./partials/dashboard", {
        contentView
      
    })
   
};