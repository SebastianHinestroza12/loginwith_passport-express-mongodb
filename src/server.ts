const engine = require("ejs-mate");
import express from "express";
import session from "express-session";
import passport from "passport";
import * as dotenv from "dotenv";
import { router } from "./routes/index";
import morgan from "morgan";
import "./db";
import "./passport/local-auth";
import flash from "connect-flash";
dotenv.config();

const app = express();

app.set("views", __dirname + "/views");
app.engine("ejs", engine);
app.set("view engine", "ejs");

// MiddlewareStack
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "nysecrets",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  app.locals.signupMessage = req.flash("signupMessage");
  app.locals.signinMessage = req.flash("signinMessage");
  app.locals.user = req.user;
  next();
});

// Routes
app.use("/", router);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Servidor Andando En El Puerto ${process.env.PORT || 3000}🍓`)
);
