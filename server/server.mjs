import express from "express";

import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const app = express();
const PORT = 8000;

app.use("/threads", apiRoutes);
app.listen(PORT, console.log(`Server Start: localhost${PORT}`));