// app.js
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/products", function (req, res) {
  res.render("products");
});

app.get("/products/:id", function (req, res) {
  res.render("product-detail", { id: req.params.id });
});

app.listen(8080, function () {
  console.log("서버가 시작되었습니다.");
});
