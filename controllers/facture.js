const conexion = require("../database/database");
const { deleteFacture, createFacture, getFacture } = require("../models/factureModel");

const getFactures = (req, res) => {
  const { uid } = req;
  getFacture(conexion, uid, (err, facture) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ ok: false, msg: "Error getFactures" });
    } else {
      console.log(facture);
      return res.status(200).json({ ok: true, facture });
    }
  });
};

const createFactures = (req, res) => {
  const { uid} = req;
  const {sid,description} = req.body;
  const date = new Date();
  createFacture(conexion,uid,sid,description,date,(err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error creatingFacture" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully createFacture" });
    }
  });
};




const deletedFactures = (req, res) => {
  const { id } = req.params;
  deleteFacture(conexion, id, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Deleted Facture" });
    } else {
      res.status(200).json({ ok: true, msg: "Deleted Successfully Facture" });
    }
  });
};




module.exports = { createFactures, getFactures,deletedFactures };
