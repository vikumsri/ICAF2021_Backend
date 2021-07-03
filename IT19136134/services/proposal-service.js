const Proposal = require("../models/proposal-model");

const createProposal = async (req, res, next) => {
  if (req.body) {
    const proposal = new Proposal(req.body);

    await proposal
      .save()
      .then((data) => {
        res.json({
          message: "Inserted Successfully",
          data: data,
        });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const getProposal = async (req, res) => {
  await Proposal.find()
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  createProposal,
  getProposal,
};
