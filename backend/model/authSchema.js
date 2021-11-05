const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: 'string',
    gid: 'string',
    img: 'string',
    email: 'string',
})

const model = new mongoose.model('user',schema)

module.exports = model