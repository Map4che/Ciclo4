const Producto = require("../models/Productos");

exports.crearProducto = async (req,res)=>{

    try{

        // Crear producto nuevo
        const producto = new Producto(req.body);

        // Almacenar en la BD
        const productoAlmacenado = await producto.save()

        res.json(productoAlmacenado);

    }catch(error){
        console.log(error);
    }
}

