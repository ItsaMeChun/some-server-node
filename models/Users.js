const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { // The name of the user
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model("users", userSchema);