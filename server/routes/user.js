const router = require("express").Router();
const { UserController } = require("../controller");
const Authentication = require("../middlewares/authentication");

router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
router.post("/googleSignIn", UserController.googleSignIn);
router.use(Authentication);
router.delete("/:id", UserController.destroy);
module.exports = router;
