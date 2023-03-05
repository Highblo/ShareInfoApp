import express from "express";
import cors from "cors";

import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const app = express();
const PORT = 8000;

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());
app.use("/threads", apiRoutes);
app.listen(PORT, console.log(`Server Start: localhost${PORT}`));