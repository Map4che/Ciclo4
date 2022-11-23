const mongoose = require ("mongoose");

const ProductosSchema = mongoose.Schema({
    nombre:{type: String, required: true, trim: true},
    precio:{type: Number, requiered: true, trim: true},
    cantidad:{type: Number, requiered:true, trim: true}

});

module.exports= mongoose.model("Productos", ProductosSchema );