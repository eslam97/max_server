
const mongoose = require('mongoose');
const Investor = require('../models/investor_applications');


exports.getAllInvestors = (req, res, next) => {
    Investor.find()
        .exec()
        .then(investor => {
            res.status(200).json(investor);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err.message,
            });
        });
};


exports.addNewInvestor = (req, res, next) => {
    console.log('_____________________________________________', req.body)
    const newInvestor = new Investor(req.body);

    newInvestor
        .save()
        .then(() => {
            res.status(201).json({
                message: 'Your Request Send successfully !',
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err.message,
            });
        });
};