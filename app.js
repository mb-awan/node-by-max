const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // we can chain our res.functions with each other as many times we need or want
}); // should be at the end of all app.use

const PORT = 3000;
app.listen(PORT);
