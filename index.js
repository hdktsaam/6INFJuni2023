const express = require("express");
const routerUrl = require("./routes/urlRoute");
const connection = require("./connection/connection");

const app = express();

app.use(express.json());

app.use("/api/v1/urls", routerUrl);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server gestart op poort ${port}`));
