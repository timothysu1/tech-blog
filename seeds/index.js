const sequelize = require('../config/connection');
const seedPost = require('./postData');
//const seedGallery = require('./galleryData');
//const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  //await seedGallery();
  await seedPost();
  //await seedPaintings();

  process.exit(0);
};

seedAll();