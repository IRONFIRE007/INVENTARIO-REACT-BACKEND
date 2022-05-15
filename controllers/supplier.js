const express = require("express");
const conexion = require("../database/database");
const { getSupplier, createSupplier, updateSupplier, deleteSupplier } = require("../models/supplierModel");

const getSuppliers = (req, res) => {
  const { uid } = req;
  getSupplier(conexion, uid, (err, suppliers) => {
    if (err) { console.log(err); return res.status(401).json({ ok: true, msg: 'Error get Suppliers' }) } else {
      res.status(200).json({ ok: true, suppliers });
    }
  })
}


const createSuppliers = (req, res) => {
  const {uid} = req;
  const {name, nit, address } = req.body;
  console.log(uid, name, nit, address);

  createSupplier(conexion, uid, name, nit, address, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(402)
        .json({ ok: false, msg: "Error creating category" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully createSupplier" });
    }
  });

}

const updateSuppliers = (req, res) => {
  const { id } = req.params;
  const { name, nit, address } = req.body;
  updateSupplier(conexion, name, nit, address, id, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Updated Supplier" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully Updated Supplier" });
    }
  });
};


const deleteSuppliers = (req, res) => {
  const { id } = req.params;
  deleteSupplier(conexion, id, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Deleted Supplier" });
    } else {
      res.status(200).json({ ok: true, msg: "Deleted Successfully Supplier" });
    }
  });
};



module.exports = { getSuppliers, createSuppliers, deleteSuppliers, updateSuppliers }