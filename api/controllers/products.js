const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const setProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }
    const imageUrl = req.file.path;
    console.log(imageUrl);
    const priceInt = parseInt(price);
    const product = await prisma.product.create({
      data: {
        name,
        price: priceInt,
        imageUrl,
      },
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const getProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

module.exports = {
  setProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
