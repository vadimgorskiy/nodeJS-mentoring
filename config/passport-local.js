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
            return done(null, false); //, req.flash('loginMessage', 'user not found')
        }

        return done(null, user);

    /*if (err)
    return done(err);

    // if no user is found, return the message
    if (!user)
    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

    // if the user is found but the password is wrong
    if (!user.validPassword(password))
    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

    // all is well, return successful user
    return done(null, user);*/

    }));
    
};

export { passport, passportLocalStrategy };