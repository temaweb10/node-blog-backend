const Post = require("../models/post");

const getPosts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 }) //сортировка
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const addPost = (req, res) => {
  const { title, author, text } = req.body.values;

  const post = new Post({ title, author, text });
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then((result) => {
      console.log(result);
      res.status("200").json(req.params.id);
    })
    .catch((err) => {
      console.log(err);
    });
};

const editPost = (req, res) => {
  const { title, author, text } = req.body;
  console.log(title, author, text);
  const { id } = req.params;
  console.log(title);
  Post.findByIdAndUpdate(id, { title, author, text }, { new: true }) //{new:true}если хочешь обнавлённые данные
    .then((post) => {
      console.log("ОТРАБОТАЛО");
      res.status(200).json(post);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getPosts,
  addPost,
  getPost,
  deletePost,
  editPost,
};
