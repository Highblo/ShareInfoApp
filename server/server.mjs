import express from "express";
import cors from "cors";

import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const app = express();
const PORT = 8000;

app.use(cors());

app.use(express.json());
app.use("/threads", apiRoutes);
app.use((req, res) => {
  res.status(404).json({ msg: "Page NotFound" });
});

app.listen(PORT, console.log(`Server Start: localhost${PORT}`));
