const { User } = require('../models');

const userData = [
  {
    user_name: 'BozoTheClown',
    password: 'comedyispain',
    company_name: 'The Guild of Fools and Joculators and College of Clowns',
    postcode: 'SM5 1RS',
    email: 'bozo@foolsguild.com',
  },
  {
    user_name: 'hungrylion99',
    password: 'tuSerasMange',
    company_name: 'The Best Circus in The World',
    postcode: 'PA33 1AN',
    email: 'notalion@geemail.com',
  },
  {
    user_name: 'ILiftTractors',
    password: 'superStrong',
    company_name: 'Muscle for hire',
    postcode: 'TA12 6LB',
    email: 'bigmuscle@muscle.com',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;