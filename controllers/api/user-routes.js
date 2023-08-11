const router = require('express').Router();
const { User } = require('../../models');

//WHEN I click on the sign-up button
//THEN my user credentials are saved and I am logged into the site
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

//WHEN I revisit the site at a later time and choose to sign in
//THEN I am prompted to enter my username and password
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    const validPass = await userData.checkPassword(req.body.password);

    if (!userData || !validPass) {
      res.status(400).json({ message: 'Incorrect email or password' });
      return
    };

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'now logged in' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//WHEN I click on the logout option in the navigation
//THEN I am signed out of the site
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;