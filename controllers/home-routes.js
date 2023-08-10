const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


//WHEN I visit the site for the first time
//THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err)
  }
});

//WHEN I click on an existing blog post
//THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          Attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

//WHEN I click on the dashboard option in the navigation
//THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    //console.log(req.session)
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }]
    });
    console.log(userData)
    if (!userData) {
      console.log('User data not found');
      return res.status(404).json({ message: 'User not found' });
    }
    const user = userData.get({ plain: true });
    //console.log(user)
    res.render('dashboard', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

//WHEN I click on the button to add a new blog post
//THEN I am prompted to enter both a title and contents for my blog post
router.get('/dashboard/new', withAuth, async (req, res) => {
  try {
    res.render('newpost', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//WHEN I click on one of my existing posts in the dashboard
//THEN I am able to delete or update my post and taken back to an updated dashboard
router.get('/dashboard/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id,)

    const post = postData.get({ plain: true });

    res.render('edit', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



//WHEN I choose to sign up
//THEN I am prompted to create a username and password
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/')
    return;
  }
  res.render('login');
});

module.exports = router;