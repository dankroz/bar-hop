var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
passport.use(
    new GoogleStrategy(
        {
            clientID: "997739765485-j16uv3tptbnls4cq4u9e6n3era5c28e1.apps.googleusercontent.com",
            clientSecret: "UjMxCUxiYSeuhxL7OzPmOMIU",
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            var userData = {
                email: profile.emails[0].value,
                name: profile.displayName,
                highscore: profile.highscore,
                token: accessToken
            };
            console.log(userData);
            done(null, userData);
        }
    )
);