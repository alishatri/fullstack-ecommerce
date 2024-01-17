const router = require("express").Router();
const {
  setUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/users");

const verifyToken = require("../middlewares/verifyToken");
const validateData = require("../middlewares/validateData");

router.post(
  "/create-user",
  validateData(["firstName", "lastName", "email", "password"]),
  setUser
);

router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUser);

router.put("/update-user", verifyToken, updateUser);

router.delete("/delete-user", verifyToken, deleteUser);

router.post("/auth", login);

module.exports = router;
