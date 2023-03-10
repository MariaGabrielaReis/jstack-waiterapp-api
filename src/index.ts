import path from "node:path";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const PORT = 3333;

    app.use(express.json());
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(router);

    app.listen(PORT, () =>
      console.log(`🔥 Server is running on http://localhost:${PORT}`)
    );
  })
  .catch(() => console.log("Error to connect MongoDB"));
