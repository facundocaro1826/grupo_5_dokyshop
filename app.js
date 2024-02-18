const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

/* configs */
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views"))

/* middleware */ 
app.use(express.static('public'));

/* routes */
const otherRoutes = require('./routers/other.routes');
const productRoutes = require('./routers/product.routes');
const usersRoutes = require('./routers/users.routes');
const cartRoutes = require('./routers/cart.routes')

/* routers */

app.use("/", otherRoutes);
app.use("/productos", productRoutes);
app.use("/usuario", usersRoutes)
app.use("/carrito", cartRoutes)


/* server */
app.listen(port, /*()=> console.log(`http://localhost:${(port)}`)*/)


