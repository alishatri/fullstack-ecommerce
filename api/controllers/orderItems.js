const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const setOrderItems = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const getOrderItems = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const getOrdersItems = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const updateOrderItems = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const deleteOrderItems = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

module.exports = { setOrderItems, getOrderItems, getOrdersItems, updateOrderItems, deleteOrderItems };
