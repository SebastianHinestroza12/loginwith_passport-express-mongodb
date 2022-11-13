const engine = require("ejs-mate");
import express from "express";
import * as dotenv from "dotenv";
import { router } from "./routes/index";
import morgan from "morgan";
import "./db";
dotenv.config();

const app = express();

app.set("views", __dirname + "/views");
app.engine("ejs", engine);
app.set("view engine", "ejs");

// MiddlewareStack
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", router);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Servidor Andando En El Puerto ${process.env.PORT || 3000}🍓`)
);
