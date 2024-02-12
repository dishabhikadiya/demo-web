const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://preetivardhanam:pQek1lzdGnT50Bqn@cluster0.c7j3tlu.mongodb.net/ecommerce?authSource=admin&replicaSet=atlas-m6jcr1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Schema
const create = new mongoose.Schema({
  key: String,
  imageUrl: String,
});

const ExampleModel = mongoose.model("create", create);

// Multer Configuration
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// API Endpoints
// POST Endpoint with Multer for Image Upload
app.post("/api/create", upload.single("image"), async (req, res) => {
  try {
    const { key } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const exampleInstance = new ExampleModel({ key, imageUrl });
    await exampleInstance.save();
    res.status(201).json(exampleInstance);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET Endpoint
app.get("/api/get", async (req, res) => {
  try {
    const examples = await ExampleModel.find();
    res.status(200).json(examples);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Serve uploaded images statically
app.use("/uploads", express.static("uploads"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
