const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth')

//WHEN I click on the button to create a new blog post
//THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
router.post('/', withAuth, async (req, res) => {
  try {
    //console.log("req.body:", req.body);
    const create_date = new Date();
    const newPost = await Post.create({
      ...req.body,
      create_date,
      user_id: req.session.user_id,
    });
    //console.log(newPost)
    res.status(200).json(newPost);

  } catch (err) {
    res.status(400).json(err);
  }
});

//Update post

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id
        }
      })
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(deletePost)
  } catch (err) {
    res.status(400).json(err);
  }
});

//WHEN I enter a comment and click on the submit button while signed in
//THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
router.post('/comment', withAuth, async (req, res) => {
  try {
    const create_date = new Date();
    const newComment = await Comment.create({
      ...req.body,
      create_date,
      user_id: req.session.user_id,
    })
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;