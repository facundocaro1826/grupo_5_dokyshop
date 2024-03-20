const express = require('express');
const router = express.Router();

const {search, home} = require("../controllers/other")

router.get("/", home);
router.get("/home", (req, res) => res.redirect("/"));

router.get("/buscar", search)

module.exports = router;