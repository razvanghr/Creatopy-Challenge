const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
const PORT = 8888;
const app = express();
const fs = require("fs");
const multer = require("multer");
const dotnev = require("dotenv");

dotnev.config();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const transferToPng = (fileName) => {
  const [name, extension] = fileName.split(".");
  return `${name}.png`;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, transferToPng(file.originalname));
  },
});

let filePath;

const upload = multer({ storage: storage }).single("file");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    console.log(req.file);
    filePath = req.file.path;
    console.log(filePath);
  });
});

app.post("/variations", async (req, res) => {
  try {
    const response = await openai.images.createVariation({
      image: fs.createReadStream(filePath),
      n: 3,
      size: "512x512",
    });
    const data = await response.data;
    console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
