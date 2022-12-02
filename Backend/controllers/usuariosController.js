const Usuario = require("../models/Usuarios");
const bcryptjs = require ("bcryptjs");
exports.crearUsuario = async (req,res) =>{
    //console.log(req.body);
    const {password, email} = req.body;
try{
    // Verificar que el email no este registrado
    let usuario = await Usuario.findOne({email});

    if (usuario){
        return res.status(302).json({msg: "Este usuario ya esta registrado"});
    }

    // Crear nuevo usuario
    usuario = new Usuario(req.body);
    // hash 
    usuario.password = await bcryptjs.hash(password, 10);
    // Guardar en la base de datos
    const usuarioAlmacenado = await usuario.save();

    res.json(usuarioAlmacenado);

}catch(error){
console.log(error)
};

};

exports.borrarUsuario = async (req,res) =>{

    try{

        await Usuario.deleteOne ({_id: req.params.id});
        res.status(200).json({msg:"Usuario eliminado exitosamente, no olvidar quitar esta funcion"});
    }catch(error){
        console.log(error);
    };
};