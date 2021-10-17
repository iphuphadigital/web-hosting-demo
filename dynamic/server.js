const path = require('path')
const express = require('express')
const app = express();
const port = 8000;

/**
 *  App configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render("home", { title: "Home", favouriteNumber: Math.random() })
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});