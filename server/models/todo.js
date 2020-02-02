const pool = require("../utils/connection");
class UserTodo {
  constructor(todo) {
    this._id = todo.id;
    (this.title = todo.title),
      (this.description = todo.description),
      (this.status = todo.status),
      (this.due_date = todo.due_date);
  }
  static create(title, description, due_date, cb) {
    pool.query(
      `INSERT INTO todo (title, description, due_date) VALUES ($1, $2, $3) RETURNING *`,
      [title, description, due_date],
      (err, res) => {
        if (err) {
          cb(err);
        } else {
          cb(null, res.rows[0]);
        }
      }
    );
  }
}

module.exports = UserTodo;
