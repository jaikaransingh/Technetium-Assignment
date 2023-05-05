const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get(".test-api", function (req, res) {
    let data = req.body
    res.send({ dataProvided: data })
})
module.exports = router;