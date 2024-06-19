import express from "express";
import bodyParser from "body-parser";
import noteRoutes from "./routes/notes.js"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(noteRoutes);

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
