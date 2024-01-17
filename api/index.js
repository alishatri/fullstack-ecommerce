const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./routers/users");
const orderRouter = require("./routers/orders");
const orderItemsRouter = require("./routers/orderItems");
const productRouter = require("./routers/products");
const cartRouter = require("./routers/cart");

app.use("/api/users", userRouter);
app.use("/api/order", orderRouter);
app.use("/api/order-items", orderItemsRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
