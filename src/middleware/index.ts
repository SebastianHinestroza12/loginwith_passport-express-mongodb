import passport from "passport";

export const postUser = () => {
  const auth = passport.authenticate("local-signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    passReqToCallback: true,
  });

  return auth;
};
