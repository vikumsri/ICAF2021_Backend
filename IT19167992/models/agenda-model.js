const mongoose = require('mongoose');

const AgendaModel = new mongoose.Schema({
    event : { type: String, required : true, trim : true },
    person : { type: String, required : false, trim : true},
    date : { type: String, required : true, trim : true},
    startingTime : { type:String,required : true,trim : true},
    endingTime : { type : String, required : true, trim : true},
    venue : { type : String, required : true, trim : true}
});

const Agenda = mongoose.model('agendas',AgendaModel);
module.exports = Agenda;