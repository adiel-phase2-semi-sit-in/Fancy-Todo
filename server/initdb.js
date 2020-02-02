const query = require("./utils/initquery");
const pool = require("./utils/connection");
const {
  DB_ERROR_CONNECT_MESSAGE,
  DB_ERROR_QUERY_MESSAGE,
  DB_SUCCESS_QUERY_MESSAGE
} = require("./utils/constant");

pool.connect((err, client) => {
  if (err) {
    console.log(DB_ERROR_CONNECT_MESSAGE, err);
  } else {
    client.query(query, (err, res) => {
      if (err) {
        console.log(DB_ERROR_QUERY_MESSAGE, err);
        client.release();
      } else {
        console.log(DB_SUCCESS_QUERY_MESSAGE);
        client.release();
      }
    });
  }
});
