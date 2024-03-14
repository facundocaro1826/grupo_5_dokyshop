const { loadData } = require('../../data');

module.exports = (req, res) => {
    const { dashboardKeywords } = req.query
    const products = loadData()
    const productsFilter = products.filter(p => p.title.toLowerCase().includes(dashboardKeywords.toLowerCase()) || p.description.toLowerCase().includes(dashboardKeywords.toLowerCase()) || p.categorySelect.toLowerCase().includes(dashboardKeywords.toLowerCase()))

    res.render("admin/searchProducResults", { products: productsFilter, dashboardKeywords}, (err, contentView) => {
        err && res.send(err.message)

        res.render("partials/dashboard", {contentView})
    })
}