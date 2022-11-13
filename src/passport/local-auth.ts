import passport from "passport";
import LocalStrategy from "passport-local";
const local = LocalStrategy.Strategy;

passport.use(
  "local-signup",
  new local(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {}
  )
);
