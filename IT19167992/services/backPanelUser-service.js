const BackPanelUser = require('../models/backPanelUser-model')

const createBackPanelUser = async ( req, res) =>{
    if(req.body){
        const backPanelUser = new BackPanelUser(req.body);
        await backPanelUser.save()
        .then(data => {
            res.status(200).send({ data: data});
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
}

const getBackPanelUsers = async (req,res) => {
    await BackPanelUser.find({})
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

const getBackPnaeluserById = async (req,res) => {
    if(req.params && req.params.id){
        await BackPanelUser.findById(req.params.id)
        .populate('backpanelusers', 'name userName email contactNumber password role')
        .then(data => {
            res.status(200).send({ backpanelusers: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }   
}

const updateBackPanelUser = async ( req, res) =>{   
    await BackPanelUser.findByIdAndUpdate(
      req.params.id,
      { $set: { email: req.body.email, contactNumber: req.body.contactNumber, password:req.body.password } },
      { upsert: true },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
}

const deleteBackPanelUser= async (req, res) => {

    //check if the req body is empty
        const id = req.params.id
        console.log(id)
        
        //delete product data to database
        await BackPanelUser.findByIdAndDelete(id).then((response) => {

            console.log('Data sucessfully deleted from the mongo db!')

            res.status(200).send(response)

            console.log('Response sent!')

        }).catch(err => {
            res.status(500).send(err.message)
        });
    
    
}

module.exports = {
    createBackPanelUser,
    getBackPanelUsers,
    updateBackPanelUser,
    deleteBackPanelUser,
    getBackPnaeluserById
};