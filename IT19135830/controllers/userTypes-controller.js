const User = require('../../IT19136134/models/user-model.js');

const getUserByType=  async (req, res) => {
    if(req.params && req.params.type){
        const type = req.params.type;
        await User.find({type:type})
            .populate('users', 'fullName email contactNo')
            .then( data =>  {
                res.status(200).send({data : data});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
}

module.exports = {
    getUserByType
}