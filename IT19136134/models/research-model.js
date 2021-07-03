const mongoose = require("mongoose");

const ResearchPaperModel = new mongoose.Schema({
  userId:[{type:mongoose.Schema.Types.ObjectId, required:true, ref:'users'}],
  tittle: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  document: { type: String, required: true },
  status: { type: String, required: true },
  paymentStatus: { type: String, required: true },
});

module.exports = mongoose.model("researchpapers", ResearchPaperModel);
