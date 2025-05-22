import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/Auth.js";
import cookieparser from "cookie-parser";
import AdminRoutes from "./routes/AdminRoutes.js";
import { connectDb } from "./utlis/db.js";

dotenv.config();
const app = express();
connectDb();
app.use(cookieparser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Required for cookies
  })
);
app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoutes);
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(4000, () => console.log(`Server is running on port ${process.env.PORT}`));
