const mongoose = require('mongoose');

//create schema for mailingList
const subscriberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedToChannel: {
        type: String,
        required: true,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//export takes the database and coinciding schema for it
module.exports = mongoose.model('subscriber', subscriberSchema);