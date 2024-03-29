const express = require("express");
const bodyParser = require("body-parser");
const accountRoutes = require("/routes.accountRoutes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/accounts", accountRoutes);

app.listen(3000, () => {
    console.log("Listening to port 3000");
});