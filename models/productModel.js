
const getProduct = async (conexion, uid, funcion) => {
  await conexion.query("SELECT * FROM products WHERE Users_idUsers = ?", uid, funcion);
};

const createProduct = async (conexion, uid, sid, cid, name, description, priceB, priceS, amount, funcion) => {
  await conexion.query("INSERT INTO `products` (`idProduct`, `Users_idUsers`, `Suppliers_idSupplier`, `Category_idCategory`, `name`, `description`, `priceBuy`, `priceSale`, `amount`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)", [uid, sid, cid, name, description, priceB, priceS, amount], funcion);
};

const updateProduct = async(conexion, sid, cid, name, description, priceB, priceS, amount, id, funcion)=> {
  await conexion.query("UPDATE `products` SET `Suppliers_idSupplier` = ?, `Category_idCategory` = ?,`name`=?, `description` = ?, `priceBuy` = ?, `priceSale` = ?, `amount` = ? WHERE `products`.`idProduct` = ?", [sid, cid, name, description, priceB, priceS, amount, id], funcion);
};


const deleteProduct = async (conexion, id, funcion) => {
  await conexion.query(" DELETE FROM `products` WHERE `products`.`idProduct` = ?", id, funcion);
};

module.exports = { getProduct, createProduct,updateProduct,deleteProduct };
