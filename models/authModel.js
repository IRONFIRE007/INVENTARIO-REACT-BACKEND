const createUser = async (conexion, name,lastName,email,password_, funcion) => {
 await conexion.query("INSERT INTO  users SET ?",{name,lastName,email,password_ },funcion);
};

const findUser = async (conexion,email, funcion) => {
    await conexion.query(" SELECT * FROM users WHERE  email = ?",email,funcion);
   };

module.exports = { createUser,findUser };
