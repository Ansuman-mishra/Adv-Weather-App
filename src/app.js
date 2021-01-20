const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../templates/views");
const parPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", tempPath);

hbs.registerPartials(parPath);

app.use(express.static(static_path));

// routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404", {
    errormsg: "Opps! Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Listening to port no ${port}`);
});
