import db from "../database/db.js";

export default class Review {
  constructor(bookTitle, bookAuthor, rating, date, review, coverId) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.rating = rating;
    this.date = date;
    this.review = review;
    this.coverId = coverId;
  }

  save() {
    return db.query(
      "INSERT INTO reviews (title, author, rating, date, review, cover_id) VALUES ($1, $2, $3, $4, $5, $6);",
      [
        this.bookTitle,
        this.bookAuthor,
        this.rating,
        this.date,
        this.review,
        this.coverId,
      ]
    );
  }

  static fetchAll(sort) {
    return db.query(`SELECT * FROM reviews ORDER BY ${sort} ASC`);
  }

  static findById(id) {
    return db.query("SELECT * FROM reviews WHERE id=$1;", [id]);
  }

  static deleteById(id) {
    return db.query("DELETE FROM reviews WHERE id=$1", [id]);
  }
};
