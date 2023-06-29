import express from "express";
import mongoose from "mongoose";
import path from "node:path";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    const PORT = 3333;

    app.use((request, response, next) => {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Methods", "*");
      response.setHeader("Access-Control-Allow-Headers", "*");

      next();
    });
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () =>
      console.log(`🔥 Server is running on http://localhost:${PORT}`)
    );
  })
  .catch(() => console.log("Error to connect MongoDB"));
