module.exports = (req, res) => {
    res.render("./admin/updateProduct", {}, (err, contentView) => {
        err && res.send(err.message)
        res.render("./partials/dashboard", {
            contentView
        })
    })
};