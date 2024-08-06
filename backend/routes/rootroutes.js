const rootcontroller = require("../controler/rootcontroler")

const express = require("express")
const router = express.Router()
router.get("/",rootcontroller)
module.exports = router