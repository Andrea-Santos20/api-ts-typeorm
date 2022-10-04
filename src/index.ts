import express from "express";
import * as dotenv from "dotenv";
import routes from "./routes";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());

dotenv.config({ path: __dirname + "/.env" });
if (process.env.NODE_ENV !== "test") {
  AppDataSource.initialize();
}

app.use(routes);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

export default app;
