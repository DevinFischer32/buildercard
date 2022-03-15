const express = require("express");
const massive = require("massive");
const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } = process.env;

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Transcribing on ${PORT}`));

const db = massive({
  host: `${PG_HOST}`,
  port: PG_PORT,
  database: `${PG_DATABASE}`,
  user: `${PG_USER}`,
  password: `${PG_PASSWORD}`,
});
