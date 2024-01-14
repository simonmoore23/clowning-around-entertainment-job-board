const { Post } = require('../models');

const postData = [
  {
    job_title: 'Part-time clown',
    description:
      'We are seeking to employ a part time clown as an act for our local circus show. Must have own giant red nose.',
    salary: 12500,
    user_id: 1,
  },
  {
    job_title: 'Lion tamer',
    description:
      'As a lion tamer, you will be responsible for training and managing the behavior of captive lions for public performances, ensuring both the safety of the audience and the well-being of the animals. This role requires a deep understanding of animal behavior, strong communication skills, and the ability to handle potentially dangerous situations with confidence and composure. Life insurance allowance bonus available after trial period.',
    salary: 29999,
    user_id: 2,
  },
  {
    job_title: 'Strongman-for-hire',
    description:
      'Looking to hire an experienced and powerful strongman to entertain at children parties and corporate events. Adept at performing impressive feats of strength and endurance to entertain and captivate audiences. Proficient in lifting heavy objects, bending metal, and showcasing physical prowess for events, shows, and promotional activities',
    salary: 25000,
    user_id: 3,
  },
];
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
