const conexion = require("../database/database");
const { createReturn, deleteReturn, getReturn } = require("../models/returnsModel");

const getReturns = (req, res) => {
  const { uid } = req;
  getReturn(conexion, uid, (err, facture) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ ok: false, msg: "Error getReturns" });
    } else {
      return res.status(200).json({ ok: true, facture });
    }
  });
};

const createReturns = (req, res) => {
  const {uid} = req;
  const { fid,amount,description} = req.body;
  const date = new Date();
  createReturn(conexion,fid,uid,amount,description,date,(err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error creatingReturn" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully createReturn" });
    }
  });
};




const deletedReturns = (req, res) => {
  const { id } = req.params;
  deleteReturn(conexion, id, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Deleted Return" });
    } else {
      res.status(200).json({ ok: true, msg: "Deleted Successfully Return" });
    }
  });
};




module.exports = { createReturns, getReturns,deletedReturns };
