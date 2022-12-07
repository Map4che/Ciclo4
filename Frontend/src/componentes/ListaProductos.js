import React, {useState} from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import {useNavigate} from "react-router-dom";
import crud from "../conexiones/crud";


    const Categorias = () =>{

        const navigate = useNavigate();

    const [categoria, setCategoria] = useState({

        nombre:""
        
    });

    const {nombre}= categoria;

    const onChange = (e)=>{
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    };
        
    const ingresarCategoria = async () =>{

        const data = {
            nombre: categoria.nombre
        }
        console.log(data);
        const response = await crud.POST(`/api/categorias`, data);
        const mensaje = response.msg;
        console.log(mensaje);
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        ingresarCategoria();
    }
        
    return (
        <>
        <Header/>
        <div className="md:flex md:min-h-screen">
        <Sidebar/>
        
        <main clasName="container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center">
        
      
       
       <form 
            onSubmit={onSubmit}
            className=" my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 "
            >
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold">Lista de Productos</h1>

            <div className="my-4">
                <div class="my-6 imagenproducto rounded-full bg-cover bg-center"/>
                </div>
            </form>
       
       </main>

       </div>
       </>
       );

    };

export default Categorias;