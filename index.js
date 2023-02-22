const express = require("express");
const { connection } = require("./config/db");
const { ShortModel } = require("./models/Shorturl.model");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, res) => {
  const alllink = await ShortModel.find();
  res.render("index", { alllinks: alllink });
});

app.post("/post", async (req, res) => {
  const { full } = req.body;
  const newlink = new ShortModel({
    full: full,
  });
  await newlink.save();
  res.redirect("/");
});

app.get("/:id", async (req, res) => {
  console.log("her");
  const shorturl = await ShortModel.findOne({ short: req.params.id });
  shorturl.click++;
  shorturl.save()
  res.redirect(shorturl.full);
});
app.listen(8080, async () => {
  try {
    await connection;
  } catch (err) {
    console.log("error wile connecting to db");
  }
  console.log("listeing on port 8080");
});
