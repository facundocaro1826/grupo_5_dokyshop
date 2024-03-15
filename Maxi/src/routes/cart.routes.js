const express = require('express');
const router = express.Router();
const cartController = require("../controllers/cart")


router.get("/", cartController.cart)

module.exports = router;