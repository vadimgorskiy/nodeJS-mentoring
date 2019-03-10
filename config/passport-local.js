import passport from 'passport';
import LocalStrategy from 'passport-local';
import models from '../models';

const passportLocalStrategy = () => {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        const user = model.users.getUserById(id);

        models.User.findAll({
            where: {
                id: id
            }
        })
        .then((user) => {
            done(null, user);
        })
        .catch(() => {
            done(null, false);
        });

        
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