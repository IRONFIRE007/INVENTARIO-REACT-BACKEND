const getReturn = async (conexion, uid, funcion) => {
    await conexion.query("SELECT * FROM `returnssale` WHERE Users_idUsers = ?", uid, funcion);
};

const createReturn = async (conexion, fid, uid, amount, description, date, funcion) => {
    await conexion.query("INSERT INTO `returnssale` (`idRestursSale`, `facture_idfacture`, `Users_idUsers`, `amount`, `description`, `date`) VALUES (NULL, ? , ? , ? , ?, ?)", [fid, uid, amount, description, date], funcion);
};

const deleteReturn = async (conexion, id, funcion) => {
    await conexion.query("DELETE FROM `returnssale` WHERE `returnssale`.`idRestursSale` = ?", id, funcion);
};

const updatProduct = async (conexion, pid, funcion) => {
    await  conexion.query("SELECT sale.Products_idProduct  FROM sale INNER JOIN facture INNER JOIN returnssale ON facture.Sale_idSale = sale.idSale AND facture.idfacture = returnssale.facture_idfacture WHERE sale.idSale = 1",funcion);
}

module.exports = { getReturn, createReturn, deleteReturn };
