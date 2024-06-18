import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const API_URL = "https://covers.openlibrary.org/b/$key/$value-$size.jpg";
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "books",
  password: "",
  port: 5432,
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var author = "";
var title = "";
var cover_id = "";
var sort = "id";
async function getReviews(sort) {
  const result = await db.query(`SELECT * FROM reviews ORDER BY ${sort} ASC;`);
  return result.rows;
}

app.get("/", async (req, res) => {
  try {
    const allReviews = await getReviews(sort);
    res.render("index.ejs", { books: allReviews });
    console.log(sort);
  } catch (err) {
    console.log("Could not execute query ", err);
  }
});

app.post("/sort", async (req, res) => {    
  sort = req.body.sort;    
  res.redirect("/");
})

app.post("/search", async (req, res) => {
  const searchTerm = req.body.search;
  const result = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}&limit=30`)
  const data = result.data.docs;
  res.render("search.ejs", {data})
})



app.post("/new", async (req, res) => {
  author = req.body.author;
  title = req.body.title;
  cover_id = req.body.cover_id;
  console.log(author, title, cover_id);
  res.render("new.ejs", {author, title, cover_id});
})



app.post("/add", async (req, res) => {
  var rating=req.body.rating;
  var review=req.body.review;
  var date=new Date()
  await db.query("INSERT INTO reviews (title, author, rating, date, review, cover_id) VALUES ($1, $2, $3, $4, $5, $6);", [title, author, rating, date, review, cover_id]);
  res.redirect("/");
})

app.post("/edit", async (req, res) => {
  var bookId = req.body.id;
  const result = await db.query("SELECT * FROM reviews WHERE id=$1;", [bookId]);
  const data = result.rows[0];
  author = data.author;
  title = data.title;
  cover_id = data.cover_id;
  res.render("new.ejs", {author: data.author, title: data.title, cover_id: data.cover_id, rating: data.rating, review: data.review})
});
  


app.post("/delete", async (req, res) => {
  var bookId = req.body.id;
  console.log(bookId);
  await db.query("DELETE FROM reviews WHERE id=$1;", [bookId]);
  res.redirect("/")
})

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
