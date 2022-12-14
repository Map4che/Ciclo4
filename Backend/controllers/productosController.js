const Productos = require("../models/Productos");



exports.obtenerProductosHome = async (req,res) =>{
    try{

        const productos = await Productos.find();
        res.json({productos});

    }catch(error){
        console.log(error);
    };
};


exports.obtenerProducto = async ( req, res) => {
    const { id } = req.params
    const producto = await Productos.find().where("categoriaId").equals(id);
    res.json(producto);

};

exports.obtenerProductoId = async ( req, res) => {
    const { id } = req.params
    const producto = await Productos.find().where("categoriaId").equals(id);
    res.json(producto);

};

/*
exports.obtenerProductoId = async (req, res) =>{
    const { id } = req.params;
    try{
        const productos = await Productos.findById(id);
        res.json({productos});
    }catch(error){
        console.log(error);
    }
};*/

exports.crearProducto = async ( req, res) => {
    try{
        const producto = new Productos(req.body);
       
        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    }
};
   
    /*
    res.status(201).json({msg:"Producto creado"});
   
    const {categoriaId} = req.body;
    console.log(req)
    try{
        //console.log(categoriaId);
        const categoriaEncontrada = await Categorias.findById(categoriaId);
        //console.log(categoriaEncontrada);
        //const categoria = req.body;
        const producto = new Productos(req.body);
      
        producto.save();
        res.json({msg:"Producto creado correctamente"});
        
    }catch(error){
        console.log(error);
    }

    };*/


    exports.actualizarProducto = async (req,res) =>{

            

        try{

            const {id} = req.params;
            const producto = await Productos.findById(id);

            if(!producto){
                return res.status(404).json({msg: "Producto no encontrado"});
            }
            /*if(producto.creador.toString() !== req.producto.id.toString()){
                return res.status(400).json({msg: "Accion no permitida para este usuario"});
            }*/

            producto.nombre = req.body.nombre || producto.nombre;
            producto.descripcion = req.body.descripcion || producto.descripcion;
            producto.stock = req.body.stock || producto.stock;
            producto.precio = req.body.precio || producto.precio;
            producto.imagen = req.body.imagen || producto.imagen;
            producto.categoriaId = req.body.categoriaId || producto.categoriaId;

            producto.save();
            res.status(202).json({msg:"Usuario actualizado correctamente"});
            
        }catch(error){
            console.log(error);
        };
        
    };

    exports.borrarProducto = async (req,res) =>{

        try{

            await Productos.deleteOne ({_id: req.params.id});
            res.status(200).json({msg:"Producto eliminado exitosamente"});
        }catch(error){
            console.log(error);
        };
    };


