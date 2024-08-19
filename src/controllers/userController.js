"use strict";
let Models = require("../models"); //matches index.js
const Mongoose = require('mongoose');

const getUsers = (res) => {
    //finds all users
    Models.User.find({})
        .then(users => res.send(users))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const getUserById = async (id, res) => {

    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const userResponse = await Models.User.find({"_id" : id});
        if(!userResponse || userResponse.length == 0) {
            res.status(404).json({error: 'User not found'});
            return;
        }
        res.send(userResponse[0]);
    }
    catch(error) {
        console.log(err);
        res.send({ result: 500, error: err.message })
    }
}

const createUser = (userPayload, res) => {
    new Models.User(userPayload).save()
        .then(user => res.send(user))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
module.exports = {
    getUsers, createUser, getUserById
}