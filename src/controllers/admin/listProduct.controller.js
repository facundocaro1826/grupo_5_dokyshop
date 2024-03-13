const { loadData } = require("../../database")

module.exports = (req, res) => {
    products = loadData()

    res.render("./admin/listProducts", { products }, (err, contentView) => {
        err && res.send(err.message)
        res.render("./partials/dashboard", {
            contentView
        })
    })
};