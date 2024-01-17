const router = require("express").Router();
const {
  setOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");

router.post("/create-order", setOrder);

router.get("/", getOrder);
router.get("/:id", getOrders);

router.put("/update-order", updateOrder);

router.delete("/delete-order", deleteOrder);

module.exports = router;
