import passport from "passport";
import LocalStrategy from "passport-local";
import { User } from "../models/user";
import flash from "connect-flash";
const local = LocalStrategy.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const userId = await User.findById(id);
  done(null, userId);
});

passport.use(
  "local-signup",
  new local(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const userExits = await User.findOne({ email });

      if (userExits) {
        return (
          req.flash("signupMessage", "Ya existe el usuario"), done(null, false)
        );
      } else {
        const user = new User();
        user.email = email;
        user.password = password;
        await user.save();
        done(null, user);
      }
    }
  )
);
