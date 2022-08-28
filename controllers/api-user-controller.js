const User = require("../models/user");

const getUsers = (req, res) => {
  User.find()
    .then((post) => res.status(200).json(post))
    .catch((error) => console.log(error));
};

const findUserByLogin = (req, res) => {
  User.findOne({ login: req.params.login })
    .then((post) => res.status(200).json(post))
    .catch((error) => console.log(error));
};

const createUser = (req, res) => {
  console.log(req.body);
  const { login, password } = req.body;
  console.log(login, password);
  const user = new User({ login, password });
  user
    .save()
    .then((pos) => res.status(200).json(pos))
    .catch((err) => res.status(500));
};

module.exports = { getUsers, findUserByLogin, createUser };
