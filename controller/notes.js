import Review from "../models/review.js";
import axios from "axios";

let sort = "id";
let author;
let title;
let cover_id;

export function getIndex(req, res, next) {
  Review.fetchAll(sort)
    .then((result) => {
      const allReviews = result.rows;
      res.render("index.ejs", { books: allReviews });
      console.log(`This is the sort method: ${sort}`);
    })
    .catch((err) => {
      console.log("Could not execute query:", err);
    });
}

export function postSort(req, res, next) {
  sort = req.body.sort;
  res.redirect("/");
}

export async function postSearch(req, res, next) {
  const searchTerm = req.body.search;
  const result = await axios.get(
    `https://openlibrary.org/search.json?q=${searchTerm}&limit=30`
  );
  const data = result.data.docs;
  res.render("search.ejs", { data });
}

export function postNew(req, res, next) {
  author = req.body.author;
  title = req.body.title;
  cover_id = req.body.cover_id;
  console.log(author, title, cover_id);
  res.render("new.ejs", { author, title, cover_id });
}

export function postAdd(req, res, next) {
  let rating = req.body.rating;
  let review = req.body.review;
  let date = new Date();
  console.log(author, title, cover_id, rating, review, date);
  const completeReview = new Review(
    title,
    author,
    rating,
    date,
    review,
    cover_id
  );
  completeReview
    .save()
    .then((result) => {
      console.log(`New complete review has been added: ${result} `);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
}

export function postEdit(req, res, next) {
  let bookId = req.body.id;
  Review.findById(bookId)
    .then((result) => {
      const data = result.rows[0];
      res.render("new.ejs", {
        author: data.author,
        title: data.title,
        cover_id: data.cover_id,
        rating: data.rating,
        review: data.review,
      });
    })
    .catch((err) => console.log(err));
}

export function postDelete(req, res, next) {
  let bookId = req.body.id;
  Review.deleteById(bookId).then((result) => {
    console.log(result);
    res.redirect("/");
  });
}
