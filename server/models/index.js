const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Event = new Schema({
    tanggal: {
        type: Date,
        required: [true, 'Tanggal harus di isi']
    },
    judul: {
        type: String,
        required: true,
        unique: true
    },
    nama: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = mongoose.model('Event', Event)