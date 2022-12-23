const express = require("express");
const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("get req avv");
});
app.post("/", (req, res) => {
  res.send("post req avv");
});
app.put("/", (req, res) => {
  res.send("put req avv");
});

app.delete("/", (req, res) => {
  res.send("delete req avv");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
