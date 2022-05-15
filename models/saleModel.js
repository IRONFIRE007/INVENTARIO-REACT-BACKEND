
const getSale = async (conexion,uid,funcion) => {
    await conexion.query("SELECT * FROM sale WHERE Users_idUsers = ?",uid,funcion);
  };

const createSale = async (conexion,pid,cid,uid,date,amount,description,funcion) => {
  await conexion.query("INSERT INTO `sale` (`idSale`, `Products_idProduct`, `Clients_idClient`, `Users_idUsers`, `date`, `amount`, `discription`) VALUES (NULL, ?, ?, ?,?,?,?)",[pid,cid,uid,date,amount,description], funcion);
};

const updateSale = async (conexion,id,name, funcion) => {
  await conexion.query("UPDATE `category` SET `name` = ? WHERE `category`.`idCategory` = ?",[name,idCategory], funcion);
};
const deleteSale = async (conexion,id,funcion) => {
  await conexion.query(" DELETE FROM `sale` WHERE `sale`.`idSale` = ?",id,funcion);
};

module.exports = { getSale,createSale,updateSale,deleteSale};
