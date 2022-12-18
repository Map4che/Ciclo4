
import React, {useState} from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {useNavigate, useParams} from 'react-router-dom';
import crud from '../../conexiones/crud';
import swal from 'sweetalert';


const CrearProductos = () =>{

const navigate = useNavigate();

const {idCategoria}=useParams();

const [producto, setProducto] = useState({

nombre:"",
descripcion:"",
precio:"",
stock:"",
imagen:"",
categoriaId:""

});

const {nombre, descripcion, precio, stock, imagen}= producto;

const onChange = (e)=>{
setProducto({
    ...producto,
    [e.target.name]: e.target.value
});
};

const ingresarProducto = async () =>{

const data = {
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: producto.precio,
    stock: producto.stock,
    imagen: producto.imagen,
    categoriaId: idCategoria
}
//console.log(data);
const response = await crud.POST(`/api/productos`, data);
const mensaje = response.msg;
console.log(mensaje);

if(mensaje==="Producto creado correctamente"){
    const mensaje="Producto creada correctamente";
    swal({
        title:"Informacion",
        text:mensaje,
        icon:"success",
        buttons:{
            confirm:{
                text:"ok",
                value: true,
                visible: true,
                className:"btn btn-primary",
                closeModal:true
            }
        }
    })

            navigate(`/home-productos/${idCategoria}`);
    };
}


const onSubmit = (e)=>{
e.preventDefault();
ingresarProducto();
}

return (
<>
<Header/>
<div className="md:flex md:min-h-screen">
<Sidebar/>

<main className="flex-1">

<div className="mt-10 flex justify-center">

<form 
    onSubmit={onSubmit}
    className=" my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 "
    >
            <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold">Crear Productos</h1>

    <div className="my-4">
        <div class="my-6 imagencategoria rounded-full bg-cover bg-center"/>
    <label className="uppercase text-white block text-lx font-bold">Ingrese el nombre del Producto: </label>
    <input 
    type="nombre"
    id="nombre"
    name="nombre"
    placeholder="Nombre del Producto"
    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
    value={nombre}
    onChange={onChange}
    />

<label className="uppercase text-white block text-lx font-bold">Ingrese una descripcion del Producto </label>
    <input 
    type="text"
    id="descripcion"
    name="descripcion"
    placeholder="Nombre del Producto"
    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
    value={descripcion}
    onChange={onChange}
    />

<label className="uppercase text-white block text-lx font-bold">Ingrese el precio del Producto: </label>
    <input 
    type="number"
    id="precio"
    name="precio"
    placeholder="Nombre del Producto"
    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
    value={precio}
    onChange={onChange}
    />

<label className="uppercase text-white block text-lx font-bold">Ingrese el stock del Producto: </label>
    <input 
    type="number"
    id="stock"
    name="stock"
    placeholder="Nombre del Producto"
    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
    value={stock}
    onChange={onChange}
    />

<label className="uppercase text-white block text-lx font-bold">Ingrese la URL de la imagen: </label>
    <input 
    type="imagen"
    id="imagen"
    name="imagen"
    placeholder="URL de la imagen"
    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
    value={imagen}
    onChange={onChange}
    />

<div className="my-4">
    <input
        type="submit"
        value="Crear Producto"
        className="bg-gray-400 mb-5 w-full py-3 text-white uppercase font-bold rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
    />
</div>
  
    </div>
    </form>
    </div>
</main>

</div>
</>
);

};

export default CrearProductos;

