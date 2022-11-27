const Productos = require("../models/Productos");

exports.crearProducto = async (req,res)=>{

    res.status(404).json({msg:"Crear producto"});
   try{
        const producto = new Productos(req.body);
        producto.creador = req.usuario.id;
        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    }

    };

    exports.obtenerProducto = async (req,res) =>{
        try{

            const producto = await Productos.find({creador: req.usuario.id});
            res.json({producto});

        }catch(error){
            console.log(error);
        };
    };

    exports.actualizarProducto = async (req,res) =>{
        try{

            const {id} = req.params;
            const producto = await Productos.findById(id);

            if(!producto){
                return res.status(400).json({msg: "Producto no encontrado"});
            }
            if(producto.creador.toString() !== req.usuario.id.toString()){
                return res.status(400).json({msg: "Accion no permitida para este usuario"});
            }

            producto.nombre = req.bodu.nombre || producto.nombre;
            producto.descripcion = req.body.descripcion || producto.descripcion;
            producto.stock = req.body.stock || producto.stock;
            producto.precio = req.body.precio || producto.precio;
            producto.imagen = req.body.imagen || producto.imagen;

            res.json({producto});
            
        }catch(error){
            console.log(error);
        };
    };

    exports.borrarProducto = async (req,res) =>{
        try{

            await Productos.deleteOne ({_id: req.params.id});
            res.json({msg:"Producto eliminado exitosamente"});
        }catch(error){
            console.log(error);
        };
    };


