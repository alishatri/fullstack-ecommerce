const router = require("express").Router();
const {
  setOrderItems,
  getOrderItems,
  getOrdersItems,
  updateOrderItems,
  deleteOrderItems,
} = require("../controllers/orderItems");

router.post("/create-order-items", setOrderItems);

router.get("/", getOrderItems);
router.get("/:id", getOrdersItems);

router.put("/update-order-items", updateOrderItems);

router.delete("/delete-order-items", deleteOrderItems);

module.exports = router;
