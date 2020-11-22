const router = require("express").Router();
const apiController = require("../controllers/apiController");

router.get("/products", apiController.getStocks);
router.get("/product/:id", apiController.getDetails);

module.exports = router;
