const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

// const categories = require("./data/categories.json");
// const news = require("./data/news.json");

// app.get("/", (req, res) => {
//   res.send("Brins API Running");
// });

// app.get("/categories", (req, res) => {
//   res.send(categories);
// });

// app.get("/category/:id", (req, res) => {
//   const id = req.params.id;
//   //console.log(id);

//   const category_news = news.filter((n) => n.category_id === id);
//   //console.log(n.category_id);
//   res.send(category_news);
// });

app.get("/", (req, res) => {
  res.send("korrah");
});

// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n._id === id);
//     res.send(selectedNews);
// });

app.listen(port, () => {
  console.log("Brins Server running on port", port);
});
