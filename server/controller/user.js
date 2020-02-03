const { User } = require("../models");
const { generateToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");
class UserController {
  static signUp(req, res, next) {
    const { email, password } = req.body;
    User.create({ email, password })
      .then(response => {
        res
          .status(200)
          .json({ message: "Success create user", data: response });
      })
      .catch(err => next(err));
  }
  static signIn(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email
      }
    })
      .then(response => {
        if (response) {
          const checkPassword = comparePassword(password, response.password);
          if (checkPassword) {
            const payload = { id: response.id, email: response.email };
            const token = generateToken(payload);
            res.status(200).json({
              message: "Successfully signIn",
              token
            });
          } else {
            next({
              status: 404,
              message: "Username or password wrong"
            });
          }
        } else {
          next({
            status: 404,
            message: "Username or password wrong"
          });
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(response => res.status(204).json(response))
      .catch(err => res.status(500).json(err));
  }
}

module.exports = UserController;
