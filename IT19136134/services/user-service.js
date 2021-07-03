const User = require("../models/user-model");

//saving the user data
const createUser = async (req, res) => {
  if (req.body) {
    const user = new User(req.body);
    await user
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

//updating the user table with the user type for the specific userId
const updateUser = async (req, res) => {
  const typeadd = req.body.type;
  console.log(typeadd);
  await User.findByIdAndUpdate(
    req.params.id,
    { $set: { type: req.body.type } },
    { upsert: true },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
};

const getUserById = async (req, res) => {
  await User.findById(req.params.id).then(response => {
    console.log(response)
    res.status(200).send(response);
  }).catch((error) => {
    res.status(500).send({ error: error.message });
  });
};


module.exports = {
  createUser,
  updateUser,
  getUserById
};
