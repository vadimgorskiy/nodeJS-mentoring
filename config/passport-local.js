import passport from 'passport';
import LocalStrategy from 'passport-local';
import { getUser } from '../models/users';

const passportLocalStrategy = () => {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        const user = model.users.getUserById(id);
        done(null, user);
    });

    passport.use('local-login', new LocalStrategy({
        usernameField : 'firstName',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, firstName, password, done) {

        const user = getUser(firstName, password);

        if (!user) {
            return done(null, false);
        }

        return done(null, user);

    }));
    
};

export { passport, passportLocalStrategy };