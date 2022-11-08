const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
// travel-site
// E9Ig2KTJZLVNZnvd

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://travel-site:E9Ig2KTJZLVNZnvd@cluster0.8lf54jt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("connected");
});

// const categories = require("./data/categories.json");
// const news = require("./data/news.json");

// async function run() {
//   try {
//     const productCollection = client.db("emaJohn").collection("products");

//     app.get("/products", async (req, res) => {
//       const page = parseInt(req.query.page);
//       const size = parseInt(req.query.size);
//       console.log(page, size);
//       const query = {};
//       const cursor = productCollection.find(query);
//       const products = await cursor
//         .skip(page * size)
//         .limit(size)
//         .toArray();
//       const count = await productCollection.estimatedDocumentCount();
//       res.send({ count, products });
//     });

//     app.post("/productsByIds", async (req, res) => {
//       const ids = req.body;
//       const objectIds = ids.map((id) => ObjectId(id));
//       const query = { _id: { $in: objectIds } };
//       const cursor = productCollection.find(query);
//       const products = await cursor.toArray();
//       res.send(products);
//     });
//   } finally {
//   }
// }
// run().catch((err) => console.error(err));
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
  console.log("Travel Side Server running on port", port);
});
