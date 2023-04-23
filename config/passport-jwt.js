const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

let options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // auth header has the json web token so we can extract 
    secretOrKey: 'secret' // every encryption and decryption happens from this key
};

passport.use(new JwtStrategy(options, function (jwtPayload, callback) {
    console.log("JWT PAYLOAD:::: ", jwtPayload);
    if(jwtPayload.user == 'admin' && jwtPayload.password == 'admin') {
        const user = {user : jwtPayload.user, password : jwtPayload.password};
        return callback(null, user);
    }
    return callback(null, false);
}));

module.exports = passport;