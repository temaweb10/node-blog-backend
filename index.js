const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/api-post");
const userRouter = require("./routes/api-user");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.listen(PORT, (err) => {
  console.log(`Server start port ${PORT} `);
});

const db =
  "mongodb+srv://temadev:recomend23@cluster0.8kfoyul.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connect"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded());
app.use(postRoutes);
app.use(userRouter);
