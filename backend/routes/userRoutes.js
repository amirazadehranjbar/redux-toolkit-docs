//region Imports
const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');
//endregion

//region Routes

// Get all users
router.get('/', getAllUsers);

// Create new user
router.post('/', createUser);

// Update user by ID
router.put('/:id', updateUser);

// Delete user by ID
router.delete('/:id', deleteUser);

//endregion

module.exports = router;
