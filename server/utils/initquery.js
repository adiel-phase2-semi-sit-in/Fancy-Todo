const query = `CREATE TABLE IF NOT EXISTS todo(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  status BOOLEAN NOT NULL,
  due_date DATE NOT NULL DEFAULT CURRENT_DATE
);`;

module.exports = query;
