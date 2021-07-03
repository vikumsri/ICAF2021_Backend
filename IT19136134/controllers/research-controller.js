const express = require("express");
const router = express.Router();
const service = require("../services/research-service");

module.exports = function () {
  router.post("/createresearch", service.createResearch);
  router.get("/getresearch", service.getResearch);
  return router;
};
