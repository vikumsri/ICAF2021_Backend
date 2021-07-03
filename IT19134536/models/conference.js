const mongo = require('mongoose')

const ConferenceModel = mongo.Schema({
    conference_title: {
        type: String
    },
    conference_date: {
        type: String
    },
    conference_description: {
        type: String
    },
    conference_logo_link: {
        type: String
    },
    conference_annoucement: {
        type: String
    },
    conference_venue: {
        type: String
    },
    status: {
        type: String
    }
})

module.exports = mongo.model("conference", ConferenceModel);