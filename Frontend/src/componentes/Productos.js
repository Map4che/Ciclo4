import React, {useState} from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import {useNavigate} from "react-router-dom";
import crud from "../conexiones/crud";
import swal from "sweetalert";


    const Productos = () =>{

        const navigate = useNavigate();

    const [categoria, setProducto] = useState({

        nombre:"",
        descripcion:"",
        stock:"",
        precio:"",
        imagen:""
        
    });

    const {nombre, descripcion, stock, precio, imagen, categoriaId}= categoria;

    const onChange = (e)=>{
        setProducto({
            ...categoria,
            [e.target.name]: e.target.value
        });
    };
        
    const ingresarProducto = async () =>{

        const data = {
            nombre: categoria.nombre,
            descripcion: categoria.descripcion,
            stock: categoria.stock,
            precio: categoria.precio,
            imagen: categoria.imagen,
            categoriaId: categoria.categoriaId

        }
        console.log(data);
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

                    navigate("/listaProductos");
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
            className=" my-10 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-5"
            
            >
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold">Crear Producto</h1>

            <div className="my-4">
                <div class="my-6 imagenproducto rounded-full bg-cover bg-center"/>
            <label className="uppercase text-white block text-lx font-bold">Ingrese el nombre Producto: </label>
            <input 
            type="nombre"
            id="nombre"
            name="nombre"
            placeholder="Nombre del producto"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={onChange}
            />

<label className="uppercase text-white block text-lx font-bold">Ingrese la descripcion: </label>
            <input 
            type="descripcion"
            id="descripcion"
            name="descripcion"
            placeholder="descripcion del producto"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={descripcion}
            onChange={onChange}
            />

<label className="uppercase text-white block text-lx font-bold">Ingrese el stock del Producto: </label>
            <input 
            type="stock"
            id="stock"
            name="stock"
            placeholder="stock del Producto"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={stock}
            onChange={onChange}
            />
</div>
</form>

<form
 onSubmit={onSubmit}
 className=" my-10 bg-gradient-to-r from-black via-gray-300 to-gray-600 shadow rounded-3xl p-5">  
     <div className="mt-24">
<label className="uppercase text-white block text-lx font-bold">Ingrese el precio del Producto: </label>
            <input 
            type="precio"
            id="precio"
            name="precio"
            placeholder="Precio del Producto"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={precio}
            onChange={onChange}
            />

<label className="uppercase text-white block text-lx font-bold">Ingrese la direccion de la imagen del Producto: </label>
            <input 
            type="imagen"
            id="imagen"
            name="imagen"
            placeholder="Imagen del Producto"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={imagen}
            onChange={onChange}
            />

<label className="uppercase text-white block text-lx font-bold">Elija la categoria: </label>
            <select 
            type="categoriaId"
            id="categoriaId"
            name="categoriaId"
            placeholder="Elija la categoria"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={categoriaId}
            onChange={onChange}
            >
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
                <option value="value3">Value 3</option>
            </select>
        

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

export default Productos;