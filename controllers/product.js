const express = require("express");
const conexion = require("../database/database");
const { getProduct, createProduct,deleteProduct, updateProduct} = require("../models/productModel");


const getProducts = (req, res) => {
 const {uid} =  req.body;
    getProduct(conexion,uid,(err,products)=>{
     if(err){ console.log(err); return res.status(401).json({ok:true,msg:'Error get Clients'})}else{
         console.log(products);
         res.status(200).json({ok:true,products});
     }
    })
}


const createProducts = (req, res) => {
        const {uid,sid,cid,name,description,priceBuy,priceSale,amount} = req.body;
         console.log(uid,sid,cid,name,description,priceBuy,priceSale,amount);

         createProduct(conexion,uid,sid,cid,name,description,priceBuy,priceSale,amount,(err)=>{
            if (err) {
                console.error(err);
              return res
                .status(400)
                .json({ ok: false, msg: "Error creating Client" });
            } else {
              res.status(200).json({ ok: true, msg: "Successfully createproduct" });
            }
         });
        
}

const updateProducts = (req, res) => {
    const {id} = req.params;
    const {sid,cid,name,description,priceBuy,priceSale,amount} = req.body;
    console.log(req.body,id);
    updateProduct(conexion,sid,cid,name,description,priceBuy,priceSale,amount,id,(err)=>{
      if (err) {
        console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error creating Client" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully createproduct" });
    }
    })
    
};


const deleteProducts = (req, res) => {
    const {id}= req.params;
    console.log(id);
    deleteProduct(conexion,id,(err) => {
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



module.exports = {getProducts,createProducts,deleteProducts,updateProducts}