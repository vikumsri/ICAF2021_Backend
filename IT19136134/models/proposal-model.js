const mongoose = require("mongoose");

const ProposalModel = new mongoose.Schema({
  userId: { type: String, required: true, trim: true },
  tittle: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  document: { type: String, required: true },
});

module.exports = mongoose.model("proposals", ProposalModel);
