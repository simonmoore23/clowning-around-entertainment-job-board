const seedPost = require('./postSeed');
const seedUser = require('./userSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n--- DATABASE SYNCED ---\n');

  await seedUser();
  console.log('\n--- USERS SEEDED ---\n');

  await seedPost();
  console.log('\n--- POSTS SEEDED ---\n');

  process.exit(0);
};

seedAll();
