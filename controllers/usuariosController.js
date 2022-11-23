const Usuario = require("../models/Usuarios");
const bcryptjs = require ("bcryptjs");
exports.crearUsuario = async (req,res) =>{
    //console.log(req.body);
    const {password} = req.body;
try{
    // Crear nuevo usuario
    const usuario = new Usuario(req.body);
    // hash 
    usuario.password = await bcryptjs.hash(password, 10);
    // Guardar en la base de datos
    const usuarioAlmacenado = await usuario.save();

    res.json(usuarioAlmacenado);

}catch(error){
console.log(error)
};

};