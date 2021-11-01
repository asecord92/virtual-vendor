const express = require('express');
const routes = require('./routes');
const sequilize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequilize.sync({force: false}).then(()=> {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});