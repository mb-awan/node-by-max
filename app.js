const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>404 : Page Not Found</h1>");
  // we can chain our res.functions with each other as many times we need or want
}); // should be at the end of all app.use

const PORT = 3000;
app.listen(PORT);
