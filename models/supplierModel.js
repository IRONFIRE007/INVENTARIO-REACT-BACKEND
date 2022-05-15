const getSupplier = async (conexion, uid, funcion) => {
  await conexion.query("SELECT * FROM suppliers WHERE 	Users_idUsers = ?", uid, funcion);
};

const createSupplier = async (conexion, uid, name, nit, address, funcion) => {
  await conexion.query("INSERT INTO `suppliers` (`idSupplier`, `Users_idUsers`, `name`, `nit`, `address`) VALUES (NULL, ?, ?, ?, ?)", [uid, name, nit, address], funcion);
};

const updateSupplier = async (conexion, name, nit, address, id, funcion) => {
  await conexion.query("UPDATE `suppliers` SET `name` = ?, `nit` = ?, `address` = ? WHERE `suppliers`.`idSupplier` = ? ", [name, nit, address, id], funcion);
};
const deleteSupplier = async (conexion, id, funcion) => {
  await conexion.query(" DELETE FROM `suppliers` WHERE `suppliers`.`idSupplier` = ?", id, funcion);
};

module.exports = { getSupplier, createSupplier, updateSupplier, deleteSupplier };
