import React, {useEffect} from "react";
import {Link} from "react-router-dom";


    const Sidebar = () =>{

        
    return (
    
        <aside className="md:w-80 lg:w-60 px-5 py-10 bg-slate-500">
            <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/listacategorias"}>
                Lista Categorias
            </Link>

            <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/categorias"}>
                Crear Categorias
            </Link>
            
            <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/listaproductos"}>
                Lista Productos
            </Link>

            <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/productos"}>
                 Crear Productos
            </Link>

            <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/categorias"}>
                Tienda
            </Link>
        </aside>
    );

    };

export default Sidebar;