const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Human = new Schema({
    id: {type:Number, default:'000000'},
    name: {type: String, match: /[a-z]/, maxLength: 255},
    age: {type: Number, min:18},
    dateOfBirth: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Human', Human);