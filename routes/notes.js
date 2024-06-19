import express from "express";
import {
  getIndex,
  postSearch,
  postSort,
  postNew,
  postAdd,
  postEdit,
  postDelete,
} from "../controller/notes.js";

const router = express.Router();

router.get("/", getIndex);

router.post("/sort", postSort);
router.post("/search", postSearch);
router.post("/new", postNew);
router.post("/add", postAdd);
router.post("/edit", postEdit);
router.post("/delete", postDelete);

export default router;
