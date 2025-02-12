const express = require("express");
const dotenv = require("dotenv");
// const cors = require('cors');
const sequelize = require("./config/DbConnection");
const authRoutes = require("./routes/AuthRoutes");
const content_router = require("./routes/Content_Routes");

dotenv.config();

const app = express();
// app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/api/content", content_router);

const PORT = process.env.PORT || 5000;

// Start Server
sequelize
  .sync({ alert: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("DB Connection Error:", err));
