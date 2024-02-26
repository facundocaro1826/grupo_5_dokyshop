module.exports = (req, res) => {
    res.render("./admin/listProducts", {}, (err, contentView) => {
        err && res.send(err.message)
        res.render("./partials/dashboard", {
            contentView
        })
    })
};