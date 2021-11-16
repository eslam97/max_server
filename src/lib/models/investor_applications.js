const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const investor = new Schema({
    user_name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    covernate: {
        type: String,
        required: true
    },
    place_to_invest: {
        type: Boolean,
        required: true
    },
    activity_type: {
        type: String,
        required: true
    },
    building_type: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    place_address: {
        type: String,
        required: true
    },
    franchised_before: {
        type: Boolean,
        required: true
    },
    details: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("investor", investor);
