const getInfoSale = async (conexion, uid, funcion) => {
  await conexion.query(
    "SELECT  * from sale WHERE sale.date=(SELECT max(sale.date) from sale ) AND sale.Users_idUsers =? ",uid,
    funcion
  );
};

const getinfoBigSale = async (conexion,uid, funcion) => {
  await conexion.query(
    "SELECT  * from sale WHERE sale.amount=(SELECT max(sale.amount) from sale ) AND sale.Users_idUsers =? ",uid,
    funcion
  );
};

const getInfoClients = async (conexion, uid, funcion) => {
  await conexion.query(
    "SELECT * FROM clients WHERE clients.idClient NOT IN (SELECT sale.Clients_idClient FROM sale) AND sale.Users_idUsers =? ",uid,
    funcion
  );
};
const getInfoSuppliers = async (conexion, uid, funcion) => {
  await conexion.query(
    "SELECT * FROM suppliers WHERE suppliers.idSupplier NOT IN (SELECT products.Suppliers_idSupplier FROM products) AND sale.Users_idUsers =? ",uid,
    funcion
  );
};
const getInfoProducts = async (conexion,uid, funcion) => {
  await conexion.query(
    "SELECT * FROM products WHERE products.idProduct NOT IN (SELECT sale.Products_idProduct FROM sale) AND sale.Users_idUsers =?",uid,
    funcion
  );
};

module.exports = {
  getInfoSale,
  getInfoClients,
  getInfoSuppliers,
  getInfoProducts,
  getinfoBigSale,
};
