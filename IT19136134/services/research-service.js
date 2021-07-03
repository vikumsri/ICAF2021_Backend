const Research = require("../models/research-model");

const createResearch = async (req, res, next) => {
  if (req.body) {
    const research = new Research(req.body);

    await research
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

const getResearch = async (req, res) => {
  await Research.find()
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  createResearch,
  getResearch,
};
