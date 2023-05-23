const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.route("/").get(urlController.alleUrls);

// router.route("/:ID").get(taakController.eenTaak);

module.exports = router;
