const express = require("express");
const conexion = require("../database/database");
const authModel = require("../models/authModel");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const createUser = (req, res) => {
    const { name, lastName, email, password } = req.body;

    authModel.findUser(conexion, email, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ ok: false, msg: "Server Error " });
        }
        if (result[0]) {
            return res.status(400).json({ ok: false, msg: "User Email Exist" });
        } else {
            const salt = bcrypt.genSaltSync();
            const password_ = bcrypt.hashSync(password, salt);

            authModel.createUser(conexion, name, lastName, email, password_, async (err) => {
                if (err) {
                    console.log(err);
                    return res
                        .status(400)
                        .json({ ok: true, msg: "Error not create User" });
                } else {

                    //Generate token
                    authModel.findUser(conexion, email, async (err, user) => {
                        if (user[0]) {
                            const { idUsers: uid, name } = user[0];

                            //Generate token

                            const token = await generateJWT(uid, name);


                            return res
                                .status(200)
                                .json({ ok: true, msg: 'User Create', token });

                        }
                    })


                }
            });
        }
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    authModel.findUser(conexion, email, async (err, result) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ ok: false, msg: "Server Error " });
        }
        if (result[0]) {
            const { idUsers: uid, name, password_ } = result[0];

            //Comfirm Password
            const validPassword = bcrypt.compareSync(password, password_);

            if (!validPassword) {
                return res
                    .status(400)
                    .json({ ok: false, msg: "The Password Incorrect" });
            }

            //Generate Token

            const token = await generateJWT(uid, name);

            res.status(201).json({ ok: true, uid, name, token });
        } else {
            return res.status(400).json({ ok: false, msg: "User not Exist" });
        }
    });
};

const renewToken = async (req, res) => {

    const { uid, name } = req;

    //Renew token
    const token = await generateJWT(uid, name);

    res.json({ ok: true, uid, name, token });
};

module.exports = { createUser, loginUser, renewToken };
