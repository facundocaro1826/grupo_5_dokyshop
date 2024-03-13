 const { loadData } = require("../../data");


        const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
     const product = loadData()
    res.render("./admin/listProducts", {product },
     (err, contentView) => {
        err && res.send(err.message)
        res.render("./partials/dashboard", {
            contentView
        })
    })
};