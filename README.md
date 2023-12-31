# Tech Blog

## Description
This application serves as a blog where users can create posts related to tech. The user needs to login in order to create posts and leave comments.

[Deployed Link](https://pacific-shore-60644-5d230a4a2725.herokuapp.com/)

![Gif](./assets/Tech%20Blog.gif)

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
In order to use this application, the user needs to visit the deploy link. The user will be presented with the homepage that contains all of the posts made by all users. To actually interact with posts and make your own, the user will need to sign up or log in to their account. Then the user will be able to make new posts, edit already made posts, and delete unwanted posts through the dashboard.

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