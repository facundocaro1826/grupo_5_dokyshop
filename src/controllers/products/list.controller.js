const { loadData } = require('../../data')

module.exports = (req, res)=>{
    const product = loadData()
    res.render("products/listProduct", {product})
}