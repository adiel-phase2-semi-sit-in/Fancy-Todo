const { User } = require("../models");

class UserController {
  static signUp(req, res, next) {
    const { email, password } = req.body;
    User.create({ email, password })
      .then(response => {
        res
          .status(200)
          .json({ message: "Success create user", data: response });
      })
      .catch(err => res.status(500).json(err));
  }
}

module.exports = UserController;
