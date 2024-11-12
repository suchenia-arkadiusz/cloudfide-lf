const getApp = require("./getApp");
const { log } = require("./config/logger");
const { appConfig } = require("./config/appConfig");

const main = () => {
  const { port } = appConfig;
  getApp().listen(port, () => {
    log.info({}, `Started express app on port ${port}`);
  });
};

main();
