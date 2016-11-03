const express = require('express')
const router = express.Router()
const Event = require('../models/index')


module.exports = {
    getEvent: function (req, res) {
        Event.find(function (err, data) {
            if (err) {
                res.status(400).json({
                    'message': 'not found'
                })
            }
            if (!data) {
                res.status(404).json({
                    'message': 'event not found'
                })
            }

            res.status(200).json(data)
        })
    },

    addEvent: function (req, res) {
        const event = {
            tanggal: req.body.tanggal,
            judul: req.body.judul,
            nama: req.body.nama,
            email: req.body.email
        }

        Event.create(event, function (err, data) {
            // if (err) res.status(400).json({'message': err.errors.tanggal.message})
            if (err) {
                // res.status(400).json({'message': req.session.error = "testing error"})
                // if (!data) res.status(304).json({'message': 'failed to add'})
                res.json({'error': req.session.error = err.message})
            }
            else {
                res.json(data)
            }
        })
    },

    deleteEvent: function (req, res) {
        Event.findOneAndRemove({
            _id: req.params.id
        }, function (err, data) {
            if (err) throw err
            res.json(data)
        })
    },

    getEditEvent: function (req, res) {

    },

    editEvent: function (req, res) {

    }
}