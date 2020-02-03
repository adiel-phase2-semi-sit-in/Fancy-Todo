const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = (process.env.PORT = 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
