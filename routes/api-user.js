const express = require("express");
const User = require("../models/user");
const {
  getUsers,
  findUserByLogin,
  createUser,
} = require("../controllers/api-user-controller");
console.log(User);
const router = express.Router();

router.get("/api/users", getUsers);
router.get("/api/user/find/:login", findUserByLogin);
router.post("/api/user/create", createUser);

module.exports = router;
