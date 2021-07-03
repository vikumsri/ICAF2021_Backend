const express = require('express');
const router = express.Router();
const userType = require('../controllers/viewUser/userType');
const presenter = require('../controllers/viewUser/workshopPresenters')
const researcher =  require('../controllers/viewUser/researchers');
const presenterStatus = require('../controllers/viewUser/getStatus');
const researcherStatus = require('../controllers/viewUser/getStatus');
const keySpeaker = require('../controllers/viewUser/keySpeakers');

//exporting function  api to connect to main endpoint
module.exports = function () {
    //type = user type wanted to filter out
    router.get('/user-type/:type', userType.userTypes);
    router.get('/presenter/:status',presenter.getPresenter);
    router.get('/researcher/:status',researcher.getReseacher);
    router.get('/presenter-status/:userId',presenterStatus.presenterStatus);
    router.get('/researcher-status/:userId',researcherStatus.presenterStatus);
    router.get('/keyspeakers',keySpeaker.keySpeaker);


    return router;
}