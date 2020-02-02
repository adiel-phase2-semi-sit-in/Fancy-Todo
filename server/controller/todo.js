const { TodoModel } = require("../models");
const NOW = new Date();
class UserTodoController {
  static create(req, res, next) {
    const { title, description, due_date } = req.body;
    TodoModel.create(title, description, due_date, (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(result);
      }
    });
  }
}

module.exports = UserTodoController;
