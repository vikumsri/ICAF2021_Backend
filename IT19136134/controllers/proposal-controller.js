const express = require("express");
const router = express.Router();
const service = require("../services/proposal-service");

module.exports = function () {
  router.post("/createproposal", service.createProposal);
  router.get("/getproposal", service.getProposal);
  return router;
};
