import express from "express";
import *as dotenv from "dotenv";
import routes from "./routes";
import { AppDataSource } from './data-source'

const app = express();

app.use(express.json())

dotenv.config({ path: __dirname + '/.env' });

AppDataSource.initialize();

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta localhost: ${process.env.PORT}`)
);


