const router = require("express").Router();

const {
  setProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

const upload = require("../middlewares/imageUpload");

router.post("/add-product", upload.single("imageUrl"), setProduct);

router.get("/", getProducts);
router.get("/:id", getProduct);

router.put("/update-product", updateProduct);

router.delete("/delete-product", deleteProduct);

module.exports = router;
