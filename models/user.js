const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BackendUserSchema = new Schema = ({
    name: String,
    dob: String,
    address: String,
    description: String,
    createdAt: Date
});

module.exports = mongoose.model('User',BackendUserSchema);