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
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold">Crear Categoria</h1>

            <div className="my-4">
                <div class="my-6 imagencategoria rounded-full bg-cover bg-center"/>
            <label className="uppercase text-white block text-lx font-bold">Ingrese el nombre Categoria: </label>
            <input 
            type="nombre"
            id="nombre"
            name="nombre"
            placeholder="Nombre de la Categoria"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={onChange}
            />
        

        <div className="my-4">
            <input
                type="submit"
                value="Crear Categoria"
                className="bg-gray-400 mb-5 w-full py-3 text-white uppercase font-bold rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            />
        </div>
          
            </div>
            </form>
       
       </main>

       </div>
       </>
       );

    };

export default Categorias;