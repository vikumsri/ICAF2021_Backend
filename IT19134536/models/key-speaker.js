const mongo = require('mongoose')

const KeySpeakerModel = mongo.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
})

module.exports = mongo.model("keyspeakers", KeySpeakerModel);