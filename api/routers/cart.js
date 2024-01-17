const router = require("express").Router();

const {
  setCart,
  getCart,
  getCarts,
  updateCart,
  deleteCart,
} = require("../controllers/cart");

router.get("/", getCarts);
router.get("/:id", getCart);

router.post("/create-cart", setCart);

router.put("/update-cart", updateCart);

router.delete("/delete-cart", deleteCart);

module.exports = router;
