const express = require("express");
const router = require("./routers");
const app = express();
const port = 3000;

app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// user login

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
