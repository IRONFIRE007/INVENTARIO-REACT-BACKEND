const conexion = require("../database/database");
const { createCategory, getCategory, updateCategory, deleteCategory } = require("../models/categoryModel");

const getCategories = (req, res) => {
  const { uid } = req.body;
  console.log(uid);
  getCategory(conexion, uid, (err, category) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ ok: false, msg: "Error getCategories" });
    } else {
      console.log(category);
      return res.status(200).json({ ok: true, category });
    }
  });
};

const createCategories = (req, res) => {
  const { uid, name } = req.body;
  createCategory(conexion, uid, name, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error creating category" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully createCategory" });
    }
  });
};


const updateCategories = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  updateCategory(conexion, id, name, (err, results) => {
    if (err) {
      console.error(err);
      console.log(results);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Updated category" });
    } else {
      res.status(200).json({ ok: true, msg: "Successfully Updated createCategory" });
    }
  });
};


const deletedCategories = (req, res) => {
  const { id } = req.params;
  console.log(id);
  deleteCategory(conexion, id, (err) => {
    if (err) {
      console.error(err);
      return res
        .status(400)
        .json({ ok: false, msg: "Error Deleted category" });
    } else {
      res.status(200).json({ ok: true, msg: "Deleted Successfully Category" });
    }
  });
};




module.exports = { createCategories, getCategories, updateCategories, deletedCategories };
