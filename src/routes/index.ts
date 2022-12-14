import express from "express";
import * as auth from "../middleware/index";
const router = express.Router();

// Registro

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", auth.registerUser());

// Login Y Principial
router.get("/", (req, res, next) => {
  res.render("signin");
});
router.post("/signin", auth.loginUser(), (req, res, next) => {});

//logout
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

//Profile

router.get("/profile", auth.isAuthenticated, (req, res, next) => {
  res.render("profile");
});

export { router };
