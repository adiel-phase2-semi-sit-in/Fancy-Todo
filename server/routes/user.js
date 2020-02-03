const router = require("express").Router();
const { UserController } = require("../controller");

router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
module.exports = router;
