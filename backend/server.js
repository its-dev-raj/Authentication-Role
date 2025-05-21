import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DbCon from "./utlis/db.js";
import AuthRoutes from "./routes/Auth.js";
import cookieparser from "cookie-parser";
import AdminRoutes from "./routes/AdminRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
DbCon();
app.use(cookieparser());
app.use(express.json());
app.use(cors());
app.use("/api/auth", AuthRoutes);
app.use("/api/admin",AdminRoutes)
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => {
  console.log(`server is running for ${PORT}`);
});
