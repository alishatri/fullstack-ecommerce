const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const setUser = async (req, res) => {
  try {
    const { firstName, lastName, email, role, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: `This user with email ${email} already exist` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        role,
        password: hashedPassword,
      },
    });
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json(500).json({
      message: `Internal server error, error: ${error},`,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json(500).json({
      message: `Internal server error. Error: ${error},`,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json(500).json({
      message: `Internal server error`,
      error: `${error}`,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { firstName, lastName, email, password } = req.body;

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });
  } catch (error) {
    console.log(error);
    res.json(500).json({
      message: `Internal server error`,
      error: `${error}`,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await prisma.user.delete({
      where: { id: userId },
    });
    user
      ? res.status(200).send("User deleted successfully")
      : res.status(404).send("User not found");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      console.log('Stored Hashed Password:', user.password);
      const passwordDecrypt = await bcrypt.compare(password, user.password);
      if (passwordDecrypt) {
        delete user.password;
        const token = jwt.sign(user, process.env.SECRET_TOKEN, {
          expiresIn: "24h",
        });
        res.json({ token });
      } else {
        res.status(401).json({ message: "Please check your credentials." });
      }
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error!" });
  }
};




module.exports = { setUser, getUser, getUsers, updateUser, deleteUser, login };
