const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("mongoose");
const agendaApi = require('./IT19167992/controllers/agenda-controller')
const backPanelUserController = require('./IT19167992/controllers/backPanelUser-controller')
const counterController = require('./IT19167992/controllers/counter-controller')
const conferenceApi = require('./IT19134536/controllers/conference-controller')
const reviwerApi = require("./IT19134536/controllers/reviwer-controller")
const userApi = require("./IT19136134/controllers/user-controller");
const researchApi = require("./IT19136134/controllers/research-controller");
const proposalApi = require("./IT19136134/controllers/proposal-controller");
const paymentApi = require("./IT19136134/controllers/stripe-payment-controller");
const cors = require("cors");
const loginAPI = require("./IT19135830/apis/login-api");
const userTypeAPI = require("./IT19135830/apis/userTypes-api");

app.use(cors());
app.use(bodyParser.json())


mongo.connect(
  "mongodb+srv://root:root@cluster0.pikdq.mongodb.net/icafDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

mongo.connection.once("open", function () {
  console.log("Mongo db connected");
});

app.route("/").get((req, res) => {
  res.send("SLIIT AF FINAL API");
});

//change only here
app.use("/user", userApi());
app.use("/user", userApi());
app.use("/research", researchApi());
app.use("/proposal", proposalApi());
app.use("/stripe", paymentApi());

app.use('/agenda', agendaApi());
app.use('/back-panel-user', backPanelUserController());
app.use('/counter', counterController());

app.use("/conference", conferenceApi());
app.use('/reviwer', reviwerApi())

app.use("/user", loginAPI());
app.use("/users", userTypeAPI());

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
