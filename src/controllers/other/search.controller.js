const { loadData } = require("../../data")


module.exports = (req, res) => {
    const {productSearched} = req.query
    const products = loadData()

    productsFilter = products.filter(p => p.title.toLowerCase().includes(productSearched.toLowerCase()) || p.description.toLowerCase().includes(productSearched.toLowerCase()))


    res.render("other/results", {products: productsFilter, productSearched})
}