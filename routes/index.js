const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //  res.redirect('/employees');
});
// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/employees',
    failureRedirect: '/employees'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/employees');
  });
});

module.exports = router;
