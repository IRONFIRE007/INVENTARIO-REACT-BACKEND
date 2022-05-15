const express = require("express");
const conexion = require("../database/database");
const { getClient, deleteClient, createClient, updateClient } = require("../models/clientModel");

const getClients = (req, res) => {
  const { uid } = req;
  getClient(conexion, uid, (err, clients) => {
    if (err) { console.log(err); return res.status(401).json({ ok: true, msg: 'Error get Clients' }) } else {
      res.status(200).json({ ok: true, clients });
    }
  })
}


const creatClients = (req, res) => {
  const {uid} = req;
  const {name, lastName, email } = req.body;
  createClient(conexion, uid, name, lastName, email, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error creating Client" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully createClient" });
    }
  });

}

const updateClients = (req, res) => {
  const { id } = req.params;
  const { name, lastName, email } = req.body;
  updateClient(conexion, name, lastName, email, id, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Updated Client" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully Updated Client" });
    }
  });
};


const deleteClients = (req, res) => {
  const { id } = req.params;
  deleteClient(conexion, id, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Deleted Client" });
    } else {
      res.status(200).json({ ok: true, msg: "Deleted Successfully Client" });
    }
  });
};



module.exports = { getClients, creatClients, deleteClients, updateClients }