const speakers = require('../../../IT19134536/models/key-speaker')

const keySpeaker = async (req,res)=> {

    if (req.params) {
        await speakers.find()
            .then(data => {
                res.status(200).send({ data:data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

module.exports ={
    keySpeaker
}