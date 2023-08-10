//WHEN I click on any other links in the navigation
//THEN I am prompted to either sign up or sign in
const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;