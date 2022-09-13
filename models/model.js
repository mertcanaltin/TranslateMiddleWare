const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    source: {
        required: true,
        type: String
    },
    target: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)