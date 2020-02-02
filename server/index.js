require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
const { SUCCESS_CONNECT_TO_SERVER_MESSAGE } = require("./utils/constant");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./initdb");

app.use("/", routes);
app.listen(PORT, console.log(SUCCESS_CONNECT_TO_SERVER_MESSAGE + PORT));
