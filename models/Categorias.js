const mongoose = require("mongoose");

const CategoriasSchema = mongoose.Schema({
    nombre:{type: String, required:true, trim: true},
    creador:{type: String, required: true, trim: true},
    creado:{ type: Date, default: Date.now()}
});

module.exports= mongoose.model("Categorias", CategoriasSchema);