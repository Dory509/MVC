const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session storage
const sess = {
    secret: 'Super secret session key',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

// Middleware for parsing JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Handlebars.js as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use(routes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
});