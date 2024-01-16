const sequelize = require('../config/connection');
const {Post, User} = require('../models');
const postSeed = require('./postSeed.json');
const userSeed = require('./userSeed.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });
  for (const user of postSeed) {
    await Post.create({
      ...user,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedAll();
