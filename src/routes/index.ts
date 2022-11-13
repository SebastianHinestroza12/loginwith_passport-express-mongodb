import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

// Registro

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  return res.status(201).json({
    status: "success",
    user: "Ok",
  });
});

// Login
router.get("/singin", (req, res, next) => {});
router.post("/singin", (req, res, next) => {});

export { router };
