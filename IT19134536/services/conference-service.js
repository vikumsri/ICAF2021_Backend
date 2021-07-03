const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ConferenceModel = require('../models/conference')
const KeySpeakerModel = require('../models/key-speaker')

app.use(bodyParser.json())

const getConferenceDetails = async (req, res) => {
    ConferenceModel.find().then(response => {
        res.send(response)
    }).catch(err => {
        res.status(500).send(err.message)
    })
}

const updateConferenceDetails = async (req, res) => {
    if (req.body) {
        await ConferenceModel.findByIdAndUpdate(
            req.body.id,
            {
                $set: {
                    conference_title: req.body.conference_title,
                    conference_date: req.body.conference_date,
                    conference_description: req.body.conference_description,
                    conference_logo_link: req.body.conference_logo_link,
                    conference_background_image_link: req.body.conference_background_image_link,
                    conference_annoucement: req.body.conference_annoucement,
                    conference_venue: req.body.conference_venue,
                }
            },
            { upsert: true },
            function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }
}

const createConference = async (req, res) => {

    console.log('inserting data to database')

    if (req.body) {

        const conference = new ConferenceModel(req.body)
        conference.save().then((conference) => {
            res.json(conference)
        }).catch(err => {
            res.status(500).send(err.message)
        })
    }
}

const createKeySpeaker = async (req, res) => {

    console.log('inserting data to database')

    if (req.body) {

        const keyspeaker = new KeySpeakerModel(req.body)
        keyspeaker.save().then((response) => {
            res.json(response)
        }).catch(err => {
            res.status(500).send(err.message)
        })
    }
}

const acceptConference = async (req, res) => {
    await ConferenceModel.findByIdAndUpdate(
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

const rejectConference = async (req, res) => {

    await ConferenceModel.findByIdAndUpdate(
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

module.exports = { createConference, createKeySpeaker, getConferenceDetails, updateConferenceDetails, acceptConference, rejectConference }