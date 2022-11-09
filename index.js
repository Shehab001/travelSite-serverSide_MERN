const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
      //3 services
      const query = {};
      const cursor = services.find(query).sort({ rating: -1 }).limit(3);
      const users = await cursor.toArray();
      res.send(users);
    });
    //allservices
    app.get("/allservices", async (req, res) => {
      const allservices = userCollection.collection("serviceDetails");

      const cursor = allservices.find({});
      const users = await cursor.toArray();
      res.send(users);
    });
    //single service
    app.get("/singleservice/:id", async (req, res) => {
      const singleservice = userCollection.collection("serviceDetails");
      const id = req.params.id;
      //  console.log(id);
      const query = { _id: ObjectId(id) };
      const user = await singleservice.findOne(query);
      //console.log(user);
      res.send(user);
    });
    //review by service id
    app.get("/review/:id", async (req, res) => {
      const review = userCollection.collection("review");
      const id = req.params.id;
      //  console.log(id);
      const query = { id: id };
      const user = await review.findOne(query);
      //console.log(user);
      res.send(user);
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
