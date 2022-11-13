import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

// Registro

router.get("/singup", (req, res, next) => {});
router.post("/singup", (req, res, next) => {});

// Login
router.get("/singin", (req, res, next) => {});
router.post("/singin", (req, res, next) => {});

export { router };
