var express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const ProductsModel = require("./Model/Product_Model.js");
const UsersModel = require("./Model/Users_Model.js");
const Order_Model = require("./Model/Order_Model.js");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Shop");

app.post("/post", (req, res) => {
  ProductsModel.create({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    Rate: req.body.Rate,
    amount: req.body.amount,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/products", function (req, res) {
  ProductsModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/user-post", (req, res) => {
  UsersModel.create({
    sr_no: req.body.sr_no,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,

    phone: req.body.phone,
    website: req.body.website,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.get("/users", function (req, res) {
  UsersModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/getuser/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);
  UsersModel.findById({ _id: id })
    .then((resusers) => res.json(resusers))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  UsersModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      // address: req.body.address,
      phone: req.body.phone,
      website: req.body.website,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UsersModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});
app.post("/order", (req, res) => {
  Order_Model.create({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    items: req.body.data,
    total: req.body.price,
  })
    .then((result) => console.log(result))
    .catch((err) => res.json(err));
});

let server = app.listen(8081, function () {
  console.log("server is running");
});
