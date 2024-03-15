var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const partials = require("express-partials")
const methodOverride =  require('method-override');

var app = express();

/* RUTAS */
const otherRoutes = require('./routes/other.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');
const adminRoutes = require('./routes/admin.routes')

/* CONFIGS */
app.set("views", path.join(__dirname, "/views"))
app.set('view engine', 'ejs');

/* MIDDLEWARE */
app.use(partials())
app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));

/* ENRUTADORES */
app.use("/", otherRoutes);
app.use("/productos", productRoutes);
app.use("/autenticacion", authRoutes)
app.use("/carrito-compra", cartRoutes)
app.use("/admin", adminRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error'); 
});


module.exports = app;