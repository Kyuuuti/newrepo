const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.post("/create_account", accountController.createAccount);
//router.get("/", accountController, createAccount);

module.exports = router;
