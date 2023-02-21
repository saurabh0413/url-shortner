const express = require("express");
const { connection } = require("./config/db");
const { ShortModel } = require("./models/Shorturl.model");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/links", async (req, res) => {
  const alllink = await ShortModel.find();
  res.send(alllink);
});
app.post("/post", async (req, res) => {
  const { full } = req.body;
  const newlink = new SshortModel({
    full: full,
    s,
  });
  await newlink.save();
  res.send(newlink);
});
app.listen(8080, async () => {
  try {
    await connection;
  } catch (err) {
    console.log("error wile connecting to db");
  }
  console.log("listeing on port 8080");
});
