const express = require('express');
const router = express.Router();
const counterService = require('../services/counter-service');

module.exports = () => {
    
    router.get('/researcher-count', counterService.getResearcherCount);
    router.get('/workshop-count', counterService.getWorkshopCount);
    router.get('/Atendee-count', counterService.getAtendeesCount);
    return router;
}