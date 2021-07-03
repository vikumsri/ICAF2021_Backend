const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ResearchPaperModel = require('../../IT19136134/models/research-model')
const WorkShopProposalModel = require('../../IT19136134/models/proposal-model')
const nodemailer = require('nodemailer');
app.use(bodyParser.json())


//Research 
const viewAllResearchForReview = async (req, res) => {

    ResearchPaperModel.find({ 'status': 'PENDING' }).then((response) => {
        res.json(response)

    }).catch(err => {
        res.status(500).send(err.message)
    })

}

const getResearchDetailsById = async (req, res) => {

    console.log(req)
    ResearchPaperModel.findById(req.body.researchId).then((data) => {

        let dataObject = {
            id: data._id,
            name: 'this is name',
            title: data.title,
            description: data.description,
            document: data.document,

        }
        res.json(dataObject)
    }).catch(err => {
        res.status(500).send(err.message)
    })
}

const acceptResearch = async (req, res) => {

    const status = req.body.status;
    console.log(status);

    await ResearchPaperModel.findByIdAndUpdate(
        req.params.id,
        { $set: { status: 'ACCEPTED' } },
        { upsert: true },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );


    sendMail(req.body.to, req.body.subject, req.body.message)


}

const rejectResearch = async (req, res) => {

    await ResearchPaperModel.findByIdAndUpdate(
        req.params.id,
        { $set: { status: 'REJECTED' } },
        { upsert: true },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );

    //call send Mail method to send the confermation email
    sendMail(req.body.to, req.body.subject, req.body.message)

}

//Workshops
const viewAllWorkShopProposalForReview = async (req, res) => {

    WorkShopProposalModel.find({ 'status': 'PENDING' }).then((data) => {
        res.json(data)
    }).catch(err => {
        res.status(500).send(err.message)
    })

}

const getWorkShopDetailsById = async (req, res) => {

    console.log(req)
    WorkShopProposalModel.findById(req.body.researchId).then((data) => {
        res.json(data)

    }).catch(err => {
        res.status(500).send(err.message)
    })
}

const acceptWorkShop = async (req, res) => {
    await WorkShopProposalModel.findByIdAndUpdate(
        req.body.id,
        { $set: { status: "ACCEPTED" } },
        { upsert: true },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {

                res.send(result);
            }
        }
    );

    //call send Mail method to send the confermation email
    sendMail(req.body.to, req.body.subject, req.body.message)

}

const rejectWorkShop = async (req, res) => {

    await WorkShopProposalModel.findByIdAndUpdate(
        req.params.id,
        { $set: { status: 'REJECTED' } },
        { upsert: true },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );

    //call send Mail method to send the confermation email
    sendMail(req.body.to, req.body.subject, req.body.message)

}




const sendMail = async (to, subject, message,) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'agrapgod@gmail.com',
            pass: 'vihanga123'
        }
    });

    var mailOptions = {
        from: 'agrapgod@gmail.com',
        to: to,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { viewAllWorkShopProposalForReview, viewAllResearchForReview, rejectWorkShop, getResearchDetailsById, getWorkShopDetailsById, acceptWorkShop, rejectResearch, acceptResearch }