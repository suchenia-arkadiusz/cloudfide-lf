const express = require("express");
const getRoutes = require("./routes");

const getApp = () => {
  const app = express();

  addRoutes(app);

  return app;
};

const addRoutes = (app) => {
  const routes = getRoutes();
  routes.forEach((route) => app.use(route.prefix, route.route));
};

module.exports = getApp;
