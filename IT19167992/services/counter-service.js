const User = require('../../IT19136134/models/user-model')

const getResearcherCount = async (req,res) => {
    await User.find({'type' : 'RESEARCHER'}).count() 
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

const getWorkshopCount = async (req,res) => {
    await User.find({'type' : 'WORKSHOP PRESENTER'}).count() 
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

const getAtendeesCount = async (req,res) => {
    await User.find({'type' : 'ATTENDEE'}).count() 
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}


module.exports = {
    getResearcherCount,
    getWorkshopCount,
    getAtendeesCount
};