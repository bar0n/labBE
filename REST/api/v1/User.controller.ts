import DAL from "../../../modules/dal/DAL.class";
import {ObjectSchema} from 'joi';

let Joi = require("joi");

export const usersControllers = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getUserSettingsByUserId: getUserSettingsByUserId,
    saveUser: saveUser

};

function getAllUsers(req, res, next) {

    DAL.UserModel.find({}, (err, docs) => {
        if (err) throw err;
        if (docs) {
            console.log('Docs:', docs);
            res.send(docs)
        }
        else {
            res.send({})
        }

    });

}

function getUserById(req, res, next) {
    console.log('getUserById', req.params.id);

    let find = DAL.UserModel.find({_id: req.params.id}, (err, docs) => {
        if (err) throw err;
        if (docs) {

            let optionalParams = docs[0];
            console.log('Doc:', optionalParams);
            res.send(optionalParams)
        }
        else {
            res.send({})
        }

    });
}

function getUserSettingsByUserId(req, res, next) {
    console.log('getUserSettingsByUserId', req.params.id);
    res.send(`getUserSettingsByUserId! ${req.params.id}`)
}

function saveUser(req, res, next) {
    let user = new DAL.UserModel();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.createdAt = new Date();
    let err = validateUser(user);
    if (err) {
        res.status(400).send( err["message"]);
    } else {
        user.save();
        res.send(`saveUser id:${user._id}`);
    }

}

function validateUser(user) {
    const userSchema = {
        name: Joi.string(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    };
    let error;
    Joi.validate(user,
        userSchema, (err, value) => {
            error =  err;
        });
    return error;
}