const Categoria = require ("../models/Categorias");

exports.crearCategoria = async (req,res) =>{

    try{
        // Crear categoria nueva
        const categoria = new Categoria(req.body);
        // Guardar en la base de datos
        const categoriaAlmacenada = await categoria.save();

        res.json(categoriaAlmacenada);

    }catch(error){
        console.log(error);
    }

}