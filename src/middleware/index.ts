import { NextFunction, Request, Response } from "express";
import passport from "passport";

export const registerUser = () => {
  const auth = passport.authenticate("local-register", {
    successRedirect: "/signin",
    failureRedirect: "/signup",
    passReqToCallback: true,
  });

  return auth;
};
export const loginUser = () => {
  const auth = passport.authenticate("local-login", {
    successRedirect: "/profile",
    failureRedirect: "/",
    passReqToCallback: true,
  });

  return auth;
};

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};
