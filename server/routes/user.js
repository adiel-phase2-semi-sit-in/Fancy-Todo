const router = require("express").Router();
const { UserController } = require("../controller");

router.post("/", UserController.signUp);

module.exports = router;
