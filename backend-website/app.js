const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/db");
const userRouter = require("./routes/user-route");

const { verifyToken } = require("./middlewares/verify-jwt");
require("dotenv").config();

const app = express();
// app.use(cors());
app.use(express.json());
const corsOpts = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOpts));
//verify-token middleware
// app.use(verifyToken);
app.use("/users", userRouter);

//Routes

const PORT = process.env.PORT || 5000;

// Start Server
sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("DB Connection Error:", err));
