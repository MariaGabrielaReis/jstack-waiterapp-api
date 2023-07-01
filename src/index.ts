import express from "express";
import mongoose from "mongoose";
import http from "node:http";
import path from "node:path";
import { Server } from "socket.io";

import { router } from "./router";

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
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

    server.listen(PORT, () =>
      console.log(`🔥 Server is running on http://localhost:${PORT}`)
    );
  })
  .catch(() => console.log("Error to connect MongoDB"));
