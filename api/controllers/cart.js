const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const setCart = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error`, error: `${error}` });
  }
};

const getCart = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error`, error: `${error}` });
  }
};

const getCarts = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error`, error: `${error}` });
  }
};

const updateCart = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error`, error: `${error}` });
  }
};

const deleteCart = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error`, error: `${error}` });
  }
};

module.exports = {
  setCart,
  getCart,
  getCarts,
  updateCart,
  deleteCart,
};
