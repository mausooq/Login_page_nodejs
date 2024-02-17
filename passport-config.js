const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: "Email not found" });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password is incorrect' });
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        // Implement logic to fetch user by id and pass it to done callback
        // Example: User.findById(id, function (err, user) {
        //    done(err, user);
        // });
    });
}

module.exports = initialize;
