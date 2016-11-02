const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Event = new Schema({
    tanggal: Date,
    judul: String,
    nama: String,
    email: String
})

module.exports = mongoose.model('Event', Event)