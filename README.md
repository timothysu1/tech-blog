# Tech Blog

## Description
This application serves as a blog where users can create posts related to tech. The user needs to login in order to create posts and leave comments.

[Deployed Link]()

[Gif](!)

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/about)
* [Handlebars](https://handlebarsjs.com/guide/)
* [BootStrap](https://blog.getbootstrap.com/)
* [MySQL](https://www.mysql.com/)
* [Express](https://expressjs.com/en/guide/routing.html)
* [Express.session](https://www.npmjs.com/package/express-session)
* [MySQL 2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://sequelize.org/docs/v6/getting-started/)
* [CLI Table](https://www.npmjs.com/package/cli-table)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation

To install necessary dependancies, run the following command: 

```
npm i
```
## Usage


## Learning Points
* Creating a fullstack application from scratch
* Understanding sessions
* Using handlebars instead of actual HTML

## Important Code
```js
router.post('/', withAuth, async (req, res) => {
  try {
    const create_date = new Date();
    const newPost = await Post.create({
      ...req.body,
      create_date,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);

  } catch (err) {
    res.status(400).json(err);
  }
});
```

This code is the api route for creating a blog post

## Author Info

### Timothy Su

* [LinkedIn](https://www.linkedin.com/in/timothysu1/)
* [Github](https://github.com/timothysu1)

## License

Please refer to license in the repo. 


## Contributions
Jass.css: https://necolas.github.io/normalize.css/