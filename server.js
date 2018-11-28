import express from "express";
import next from "next";
import dotenv from "dotenv";
import models from "./models";
import currentUser from "./lib/middleware";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;
const URL = process.env.ROOT_URL || `http://localhost:${port}`;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(currentUser);
  server.get("*", (req, res) => {
    handle(req, res);
  });
  try {
    models.sequelize.sync().then(() => {
      server.listen(port, err => {
        if (err) throw err;
        console.log(`Server is up and running at ${URL}`);
      });
    });
  } catch (err) {
    console.log(err);
  }
});
