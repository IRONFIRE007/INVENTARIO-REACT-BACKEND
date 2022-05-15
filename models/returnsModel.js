const getReturn = async (conexion, uid, funcion) => {
    await conexion.query("SELECT * FROM `returnssale` WHERE Users_idUsers = ?", uid, funcion);
};

const createReturn = async (conexion, fid, uid, amount, description, date, funcion) => {
    await conexion.query("INSERT INTO `returnssale` (`idRestursSale`, `facture_idfacture`, `Users_idUsers`, `amount`, `description`, `date`) VALUES (NULL, ? , ? , ? , ?, ?)", [fid, uid, amount, description, date], funcion);
};

const deleteReturn = async (conexion, id, funcion) => {
    await conexion.query("DELETE FROM `returnssale` WHERE `returnssale`.`idRestursSale` = ?", id, funcion);
};

module.exports = { getReturn, createReturn, deleteReturn };
