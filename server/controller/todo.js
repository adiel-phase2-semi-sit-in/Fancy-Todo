const { Todo } = require("../models");
class TodoController {
  static create(req, res, next) {
    const UserId = req.decoded.id;
    const { title, description, status, due_date } = req.body;
    Todo.create({ UserId, title, description, status, due_date })
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        next(err);
      });
  }

  static delete(req, res, next) {
    const id = req.params.id;
    Todo.destroy({
      where: {
        id
      }
    })
      .then(response => {
        res.status(204);
      })
      .catch(err => {
        next(err);
      });
  }

  static find(req, res, next) {
    Todo.findAll()
      .then(response => res.status(200).json(response))
      .catch(response => next(err));
  }
}

module.exports = TodoController;
