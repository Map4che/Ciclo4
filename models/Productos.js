const mongoose = require ("mongoose");

const ProductosSchema = mongoose.Schema({
    nombre:{type: String, required: true, trim: true},
    descripcion:{type: String, required: true, trim: true},
    stock:{type: Number, requiered:true, trim: true},
    precio:{type: Number, requiered: true, trim: true},
    imagen:{type: String, required: true, trim: true},
    creado:{ type: Date, default: Date.now()},
    categoriaId:{type:mongoose.Schema.Types.ObjectId, ref:"Categorias"}
    

});

module.exports= mongoose.model("Productos", ProductosSchema );