require("dotenv").config();
import express from "express";
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
import router from "./routes";

app.use(router);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
