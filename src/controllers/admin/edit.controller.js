const { loadData } = require("../../data");

module.exports = (req, res) => {
    const { id } = req.params
    const products = loadData()
    const productFind = products.find(p => p.id === +id)
    res.render("./admin/editProduct", { product: productFind }, (err, contentView) => {
        err && res.send(err.message)
        res.render("./partials/dashboard", {
            contentView
        })
    })
};