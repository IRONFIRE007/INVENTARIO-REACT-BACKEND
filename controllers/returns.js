const conexion = require("../database/database");
const { createReturn, deleteReturn, getReturn } = require("../models/returnsModel");

const getReturns = (req, res) => {
  const { uid } = req.body;
  console.log(uid);
  getReturn(conexion, uid, (err, facture) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ ok: false, msg: "Error getReturns" });
    } else {
      console.log(facture);
      return res.status(200).json({ ok: true, facture });
    }
  });
};

const createReturns = (req, res) => {
  const { fid,uid,amount,description} = req.body;
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
  console.log(id);
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
