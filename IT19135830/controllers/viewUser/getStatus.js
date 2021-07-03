const  proposal = require('../../../IT19136134/models/proposal-model.js');
const research = require('../../../IT19136134/models/research-model.js');

const presenterStatus = async (req,res)=> {

    if (req.params && req.params.userId) {
        const userId = req.params.userId;

        console.log(userId);
            await proposal.find({userId: userId})
                .then(data => {
                    res.status(200).send({ data:data});
                })
                .catch(error => {
                    res.status(500).send({error: error.message});
                });
        }
    }


const researcherStatus = async (req,res)=> {


    if (req.params && req.params.userId) {
        const userId = req.params.userId;

        console.log(userId);
        await research.find({userId: userId})
            .then(data => {
                res.status(200).send({ data:data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

module.exports ={
    presenterStatus,
    researcherStatus
}