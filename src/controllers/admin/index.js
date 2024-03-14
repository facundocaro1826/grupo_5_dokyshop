module.exports = { 
    create: require("./createProduct.controller"),
    store: require("./store.controller"),
    list: require("./listProduct.controller"),
    edit: require("./edit.controller"),
    update: require("./update.controller"),
    deleteProduct : require('./deleteProduct.controller'),
    destroy: require('./destroy.controller')
    
}