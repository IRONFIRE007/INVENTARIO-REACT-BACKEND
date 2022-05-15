const getClient = async (conexion, uid, funcion) => {
  await conexion.query("SELECT * FROM clients WHERE Users_idUsers", uid, funcion);
};

const createClient = async (conexion, uid, name, lastName, email, funcion) => {
  await conexion.query("INSERT INTO `clients` (`idClient`, `Users_idUsers`, `name`, `lastName`, `email`) VALUES (NULL, ?, ?, ?, ?)", [uid, name, lastName, email], funcion);
};

const updateClient = async (conexion, name, lastName, email, idClient, funcion) => {
  await conexion.query("UPDATE `clients` SET `name` = ?, `lastName` = ?, `email` = ? WHERE `clients`.`idClient` = ?", [name, lastName, email, idClient], funcion);
};
const deleteClient = async (conexion, idClient, funcion) => {
  await conexion.query(" DELETE FROM `clients` WHERE `clients`.`idClient` = ?", idClient, funcion);
};

module.exports = { getClient, createClient, updateClient, deleteClient };
