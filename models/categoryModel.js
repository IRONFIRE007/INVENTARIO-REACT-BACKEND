
const getCategory = async (conexion,uid,funcion) => {
    await conexion.query("SELECT * FROM category WHERE Users_idUsers = ?",uid,funcion);
  };

const createCategory = async (conexion,uid, name, funcion) => {
  await conexion.query("INSERT INTO `category` (`idCategory`, `Users_idUsers`, `name`) VALUES (NULL, ?, ?)",[uid,name], funcion);
};

const updateCategory = async (conexion,idCategory,name, funcion) => {
  await conexion.query("UPDATE `category` SET `name` = ? WHERE `category`.`idCategory` = ?",[name,idCategory], funcion);
};
const deleteCategory = async (conexion, idCategory , funcion) => {
  await conexion.query(" DELETE FROM `category` WHERE `category`.`idCategory` = ?",idCategory, funcion);
};

module.exports = { getCategory,createCategory,updateCategory,deleteCategory};
