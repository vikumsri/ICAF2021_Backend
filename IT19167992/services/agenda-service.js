const Agenda = require('../models/agenda-model');

const createAgenda = async ( req, res) =>{
    if(req.body){
        const agenda = new Agenda(req.body);
        await agenda.save()
        .then(data => {
            res.status(200).send({ data: data});
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
}

const getAgenda = async (req,res) => {
    await Agenda.find({})
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

const getEventbyId = async (req,res) => {
    if (req.params && req.params.id) {
        await Agenda.findById(req.params.id)
            .populate('agendas', 'event person date startingTime endingTime venue')
            .then(data => {
                res.status(200).send({ agendas: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
const updateAgenda = async (req,res) => {
    await Agenda.findByIdAndUpdate(
        req.params.id,
        { $set: { date: req.body.date, startingTime: req.body.startingTime, endingTime:req.body.endingTime, venue:req.body.venue } },
        { upsert: true },
        function (err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });
}

const deleteAgenda = async (req,res) => {
     //check if the req body is empty
     const id = req.params.id
     console.log(id)
     
     //delete product data to database
     await Agenda.findByIdAndDelete(id).then((response) => {

         console.log('Data sucessfully deleted from the mongo db!')

         res.status(200).send(response)

         console.log('Response sent!')

     }).catch(err => {
         res.status(500).send(err.message)
     });
}

module.exports = {
    createAgenda,
    getAgenda,
    updateAgenda,
    deleteAgenda,
    getEventbyId
};