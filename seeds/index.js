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

  // console.log(users)
  // const userData = users.map((user)=>user.get({plain:true}))
  //console.log(userData)

  const postInfo = await Post.bulkCreate(postSeed)
  const postData= postInfo.map((post)=>post.get({plain:true}))

  // console.log(postData)

  process.exit(0);
};

seedAll();
