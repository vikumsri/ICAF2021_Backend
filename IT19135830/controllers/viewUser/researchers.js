const User = require('../../../IT19136134/models/user-model.js');
const research = require('../../../IT19136134/models/research-model.js')


const getReseacher=  async (req, res) => {
    // in the request, the type of the users that needs to be filtered out will be sent

    if(req.params && req.params.status){
        const status = req.params.status;

        let ids = [];
        let dataList = []
        await research.find({status:status})
            .then( data =>  {

                dataList = data
                for(let i = 0; i< data.length; i++) {
                    let id = data[i];
                    let userId = id._id;
                    ids.push(id.userId);
                }

            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });

        let researchers = []
        //
        researchers = await researchDetailsFromUserID(ids)

        res.status(200).send({ info : researchers,data:dataList});

    }
}



const researchDetailsFromUserID = async (ids)=>{

    let researchers = [];

    for(let i = 0; i< ids.length; i++) {
        let userId= ids[i];

        console.log(userId);
        // console.log(userId);
        await User.findById(userId)
            .then(info => {
                researchers.push(info)
            })
    }

    return researchers



}





module.exports = {
    getReseacher
}