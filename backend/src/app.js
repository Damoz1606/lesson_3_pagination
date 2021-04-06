const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const { url } = require("./config/database");

//database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("MongoDB Connect");
  })
  .catch((err) => console.log(err));

//settings
app.set("port", process.env.PORT || 3000);

//middleware
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/", require("./app/routes/index"));

//static

//listener
app.listen(app.get("port"), (req, res) => {
  console.log("Server on port: " + app.get("port"));
});
