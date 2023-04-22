const router = require("express").Router();

router.get("/test", (req, res) => {
    res.send("product test is successful");
});

module.exports = router