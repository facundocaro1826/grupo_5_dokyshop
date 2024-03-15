const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { loadData } = require('../../data')
module.exports = (req, res)=>{
    const {id} = req.params;
    const products = loadData();
    const productFind = products.find(p => p.id === +id);

    const listProduct = loadData()
    res.render("products/productDetail", {product : productFind, toThousand, listProduct})
}