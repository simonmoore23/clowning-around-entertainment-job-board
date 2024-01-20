const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const { authPlugins } = require('mysql2');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

let sess = {
  secret: 'SuperSecretKey',
  resave: true,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 3600000,
  },
};
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
require('./utils/auth');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controllers/index'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at port 3001'));
});
