const express = require('express');
const router = express.Router();
const agendaService = require('../services/agenda-service');

module.exports = () => {
    router.post('/add' , agendaService.createAgenda);
    router.get('/',agendaService.getAgenda);
    router.get('/:id',agendaService.getEventbyId);
    router.put('/edit/:id', agendaService.updateAgenda);
    router.delete('/delete/:id', agendaService.deleteAgenda);
    return router;
}