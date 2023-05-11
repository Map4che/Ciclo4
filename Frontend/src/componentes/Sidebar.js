import React, {useEffect} from "react";
import {Link} from "react-router-dom";


    const Sidebar = () =>{

        
    return (
    
        <aside className="md:w-60 lg:w-50 px-10 py-0 bg-slate-500">
            <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/admin"}>
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

           {/* <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/productos"}>
                 Crear Productos
    </Link> */}

            <Link
            className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            to={"/"}>
                Tienda
            </Link>
        </aside>
    );

    };

export default Sidebar;