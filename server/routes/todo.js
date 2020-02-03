const router = require("express").Router();
const { TodoController } = require("../controller");

router.post("/", TodoController.create);
module.exports = router;
