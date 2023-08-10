const { Post } = require('../models');

const postData = [
  {
    title: 'Pizza',
    content: 'Pizza',
    create_date: 'June 22, 2021 09:00:00',
    user_id: 1
  }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost