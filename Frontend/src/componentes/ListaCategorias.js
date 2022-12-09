import React, {useState} from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import {useNavigate} from "react-router-dom";
import crud from "../conexiones/crud";


    const ListaCategorias = () =>{
        

        const navigate = useNavigate();

    const [categoria, getCategoria] = useState({

        nombre:""
        
    });

    const {nombre}= categoria;

    const onChange = (e)=>{
        getCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    };
        
    const listaCategorias = async () =>{

        const data = {
            nombre: categoria.nombre
        }
        console.log(data);
        const response = await crud.GET(`/api/categorias`, data);
        const mensaje = response.msg;
        console.log(mensaje);
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        listaCategorias();
    }
        
    return (
        <>
        <Header/>
        <div className="md:flex md:min-h-screen">
        <Sidebar/>
        
        <main clasName="container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center">
        
      
       
       <form 
            onSubmit={onSubmit}
            className=" my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 pr-10"
            >
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold"> Lista de Categorias</h1>

            <div className="my-4">
                <div class="my-6 imagencategoria rounded-full bg-cover bg-center"/>
            </div>

            <div>
                <input
                type="submit"
                className="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-sky-600 transition-colors"
                value="Ver todas"
                onClick={listaCategorias}
                onChange={onChange}
                />
            </div>
            </form>
       
       </main>

       </div>
       </>
       );

    };

export default ListaCategorias;