const { Client } = require("pg");
const query = require("./utils/initquery");
const {
  DB_ERROR_CONNECT_MESSAGE,
  DB_ERROR_QUERY_MESSAGE,
  DB_SUCCESS_QUERY_MESSAGE
} = require("./utils/constant");

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

client.connect(err => {
  if (err) {
    console.log(DB_ERROR_CONNECT_MESSAGE, err);
  } else {
    client.query(query, (err, res) => {
      if (err) {
        console.log(DB_ERROR_QUERY_MESSAGE, err);
        client.end();
      } else {
        console.log(DB_SUCCESS_QUERY_MESSAGE);
        client.end();
      }
    });
  }
});
