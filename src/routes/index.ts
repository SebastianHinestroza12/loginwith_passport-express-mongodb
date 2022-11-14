import express from "express";
import * as auth from "../middleware/index";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

// Registro

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", auth.postUser(), (req, res) => {});

// Login
router.get("/singin", (req, res, next) => {});
router.post("/singin", (req, res, next) => {});

//Profile

router.get("/profile", (req, res, next) => {
  res.render("profile");
});

export { router };
