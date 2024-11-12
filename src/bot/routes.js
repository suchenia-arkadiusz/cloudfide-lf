const express = require("express");
const { validateInput } = require("./validator/inputValidator");
const { fetchAndAnalyzeData } = require("./helper/fetchAndAnalyzeData");

const getBotRoutes = () => {
  const router = express.Router();

  router.get("/", validateInput, fetchAndAnalyzeData);

  return router;
};

module.exports = getBotRoutes;
