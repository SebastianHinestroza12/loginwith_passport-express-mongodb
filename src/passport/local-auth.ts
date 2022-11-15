import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../models/user";
const local = LocalStrategy.Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const userId = await User.findById(id);
  done(null, userId);
});

passport.use(
  "local-register",
  new local(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const { name } = req.body;
      const userExits = await User.findOne({ email });

      if (userExits) {
        return (
          req.flash("registerMessage", "Ya existe el usuario"),
          done(null, false)
        );
      } else {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        await user.save();
        done(null, user);
      }
    }
  )
);

passport.use(
  "local-login",
  new local(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const userExits = await User.findOne({ email });
      if (!userExits) {
        return (
          req.flash("loginMessage", "Usuario No Encontrado"), done(null, false)
        );
      }
      if (!(await userExits?.comparePassword(password))) {
        return (
          req.flash("loginMessage", "Contraseña Incorrecta"), done(null, false)
        );
      }
      return done(null, userExits);
    }
  )
);
