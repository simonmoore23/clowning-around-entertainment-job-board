const numeral = require('numeral');
module.exports = {
  numeral: (number) => {
    return numeral(number).format('0,0');
  },
};
// Handlebars.registerHelper('numeral', function (number) {

// });
