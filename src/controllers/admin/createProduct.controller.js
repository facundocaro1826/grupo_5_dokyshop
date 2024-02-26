module.exports = (req, res) => {
    res.render("./admin/createProduct", {}, (err, contentView) => {
        err && res.send(err.message)
        res.render("./partials/dashboard", {
            contentView
        })
    })
};