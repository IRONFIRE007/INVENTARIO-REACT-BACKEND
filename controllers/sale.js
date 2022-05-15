const express = require("express");
const conexion = require("../database/database");
const { getSale, createSale, updateSale, deleteSale } = require("../models/saleModel");

const getSales = (req, res) => {
    const { uid } = req;
    getSale(conexion, uid, (err, sale) => {
        if (err) { console.log(err); return res.status(401).json({ ok: true, msg: 'Error get Sales' }) } else {
            console.log(sale);
            res.status(200).json({ ok: true, sale });
        }
    })
}


const createSales = (req, res) => {
    const { uid} = req;
    const { pid, cid, amount, description } = req.body;

    const date = new Date();

    console.log(pid, cid, uid, date, amount, description);

    createSale(conexion, pid, cid, uid, date, amount, description, (err) => {
        if (err) {
            console.error(err);
            return res
                .status(400)
                .json({ ok: false, msg: "Error creating Sale" });
        } else {
            res.status(200).json({ ok: true, msg: "Successfully createSale" });
        }
    });

}

const deleteSales = (req, res) => {
    const { id } = req.params;
    deleteSale(conexion, id, (err) => {
        if (err) {
            console.error(err);
            return res
                .status(400)
                .json({ ok: false, msg: "Error Deleted Client" });
        } else {
            res.status(200).json({ ok: true, msg: "Deleted Successfully Sale" });
        }
    });
};


module.exports = { getSales, createSales,  deleteSales }