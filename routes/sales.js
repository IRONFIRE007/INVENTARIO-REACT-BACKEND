const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { getSales, createSales, deleteSales } = require("../controllers/sale");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validator } = require("../middlewares/validator");

router.use(validateJWT);
router.get("/get", getSales);
router.post("/new", createSales);
router.delete("/delete/:id", deleteSales);

module.exports = router;
