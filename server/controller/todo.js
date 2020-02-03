const { Todo } = require("../models");
class TodoController {
  static create(req, res, next) {
    const UserId = req.decode.id;
    const { title, description, status, due_date } = req.body;
    Todo.create({ UserId, title, description, status, due_date })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
}

module.exports = TodoController;
