const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const setOrder = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const getOrder = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const getOrders = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const updateOrder = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal server Error`,
      error: `${error}`,
    });
  }
};

module.exports = { setOrder, getOrder, getOrders, updateOrder, deleteOrder };
