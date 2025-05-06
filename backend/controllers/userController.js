//region Imports
const User = require('../models/User');
//endregion

//region Get All Users
const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
};
//endregion

//region Create New User
const createUser = async (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email) {
        res.status(400);
        throw new Error('Name and Email are required');
    }

    const user = await User.create({ name, email, age });
    res.status(201).json(user);
};
//endregion

//region Update User
const updateUser = async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json(updatedUser);
};
//endregion

//region Delete User
const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    await user.remove();

    res.status(200).json({ message: "User removed" });
};
//endregion

//region Exports
module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};
//endregion
