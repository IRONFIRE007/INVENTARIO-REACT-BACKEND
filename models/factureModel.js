const getFacture = async (conexion,uid,funcion) => {
    await conexion.query("SELECT * FROM `facture` WHERE Users_idUsers = ?",uid,funcion);
  };

const createFacture = async (conexion,uid,sid,description,date,funcion) => {
  await conexion.query("INSERT INTO `facture` (`idfacture`, `Users_idUsers`, `Sale_idSale`, `description`, `date`) VALUES (NULL,?,?,?,?)",[uid,sid,description,date], funcion);
};

const deleteFacture = async (conexion,id,funcion) => {
  await conexion.query(" DELETE FROM `facture` WHERE `facture`.`idfacture` = ?",id,funcion);
};

module.exports = { getFacture,createFacture,deleteFacture};
