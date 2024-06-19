import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "books",
  password: "",
  port: 5432,
});

db.connect();

export default db;
