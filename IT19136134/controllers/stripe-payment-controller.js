const express = require("express");
const router = express.Router();
const service = require("../services/stripe-payment-service");

module.exports = function () {
  router.post("/charge", service.createPaymrnt);
  return router;
};
