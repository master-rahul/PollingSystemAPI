// getting the passport module
const passport = require('passport');
// getting the passport-jwt module
const JwtStrategy = require('passport-jwt').Strategy;
// getting the passport-jwt module for extraction of jwt token
const ExtractJwt = require('passport-jwt').ExtractJwt;

// setting option for jwt token
let options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // auth header has the json web token so we can extract 
    secretOrKey: 'secret' // every encryption and decryption happens from this key
};

// authenticating the requesting by verfying credentials
passport.use(new JwtStrategy(options, function (jwtPayload, callback) {
    console.log("JWT PAYLOAD:::: ", jwtPayload);
    if(jwtPayload.user == 'admin' && jwtPayload.password == 'admin') {
        const user = {user : jwtPayload.user, password : jwtPayload.password};
        return callback(null, user);
    }
    return callback(null, false);
}));

module.exports = passport;