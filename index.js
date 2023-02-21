const express = require("express");
const { connection } = require("./config/db");
const app = express();
app.use(express.json());
app.listen(8080, async () => {
  try {
    await connection;
  } catch (err) {
    console.log("error wile connecting to db");
  }
  console.log("listeing on port 8080");
});
