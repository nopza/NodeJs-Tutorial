const express = require("express");
const multer = require("multer");
const uuid = require("uuid").v4;
const path = require("path");

const mongoose = require("mongoose");
const Image = require("./Models/Image");

mongoose.connect("mongodb://127.0.0.1/upload-example", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", console.log);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    const id = uuid();
    const filePath = `images/${id}${ext}`;
    Image.create({ filePath })
        .then(() => {
            cb(null, filePath);
        });
  },
});

const upload = multer({ storage });

const app = express();
app.use(express.static("public"));
app.use(express.static('uploads'));

app.post("/upload", upload.single("avatar"), (req, res) => {
  return res.json({ status: "OK" });
});

app.post("/upload/multiple", upload.array("avatar"), (req, res) => {
  return res.redirect('/');
});

app.get('/images', (req, res) => {
    Image.find()
        .then((images) => {
            return res.json({status: 'OK', images})
        })
})

app.listen(3001, () => console.log("App is listening..."));
