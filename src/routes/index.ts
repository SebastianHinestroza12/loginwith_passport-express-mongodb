import express from "express";
import * as auth from "../middleware/index";
const router = express.Router();

//Home

router.get("/", (req, res, next) => {
  res.render("index");
});

// Registro

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", auth.registerUser());

// Login
router.get("/signin", (req, res, next) => {
  res.render("signin");
});
router.post("/signin", auth.loginUser(), (req, res, next) => {});

//Profile

router.get("/profile", (req, res, next) => {
  res.render("profile");
});

export { router };
