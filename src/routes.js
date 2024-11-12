const { appConfig } = require("./config/appConfig");
const getBotRoutes = require("./bot/routes");

const getRoutes = () => {
  const prefix = appConfig.apiPrefix;

  return [{ prefix, route: getBotRoutes() }];
};

module.exports = getRoutes;
