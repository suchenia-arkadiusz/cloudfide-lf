module.exports = {
  appConfig: {
    port: process.env.APP_PORT || 3000,
    apiPrefix: process.env.APP_API_PREFIX || "/api/v1/analyze-crypto",
  },
};
