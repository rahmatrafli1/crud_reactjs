import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const respond = await User.findAll();
    res.status(200).json(respond);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const respond = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respond);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: "User has been Created!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User has been Updated!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User has been Deleted!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
