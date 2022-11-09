const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());

const uri =
  "mongodb+srv://travel-site:E9Ig2KTJZLVNZnvd@cluster0.8lf54jt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// const categories = require("./data/categories.json");
// const news = require("./data/news.json");

async function run() {
  try {
    const userCollection = client.db("travel-site");

    app.get("/services", async (req, res) => {
      const services = userCollection.collection("serviceDetails");

      const cursor = services.find({});
      const users = await cursor.toArray();
      res.send(users);
    });
  } finally {
  }
}
run().catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("korrah");
});

app.listen(port, () => {
  console.log("Travel Side Server running on port", port);
});
