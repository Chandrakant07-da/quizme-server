require("dotenv").config();
import express from "express";
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  express.json(),
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const port = process.env.PORT || 4000;
import router from "./routes";

app.use(router);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
