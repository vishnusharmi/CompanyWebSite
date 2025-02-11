// const a = 10;
// console.log(a);

const express = require("express");
const { connectDB } = require("./DB/db");
const contentRouter = require("./routes/ContentRoutes");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/content", contentRouter);
app.use((req, res) => res.status(404).json({ message: "Default error" }));

connectDB()
  .then(() => app.listen(PORT, () => console.log(`👂 on PORT: ${PORT}.`)))
  .catch(() => console.error("Something got messed while connecting to DB"));
