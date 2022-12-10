import React, { useState, useEffect } from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import crud from "../conexiones/crud";



const ListaCategorias = () => {

    

    const navigate = useNavigate();

    const [categoria, getCategoria] = useState({

        nombre: ""

    });

    const { nombre } = categoria;

    const onChange = (e) => {
        getCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    };

    /*const listaCategorias = async () =>{

        const data = {
            nombre: categoria.nombre
        }
        console.log(data);
        const response = await crud.GET(`/api/categorias`, data);
        const mensaje = response.msg;
        console.log(mensaje);
    };*/

    const [categorias1, setCategorias] = useState([]);

    const cargarCategorias = async () => {

        const response = await crud.GET(`/api/categorias`);
        console.log(response);
        setCategorias(response.categoria);

    }

    useEffect(() => {

        cargarCategorias();

    }, [])

    /*
     const onSubmit = (e)=>{
         e.preventDefault();
         listaCategorias();
     }*/

    return (
        <>
            <Header />
            <div className="md:flex md:min-h-screen">
                <Sidebar />

                <main className="flex-1">


                    <div className="mt-5 flex justify-center">


                       
                    
                    <form className="table table-bordered my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 px-10">
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold"> Lista de Categorias</h1>

                    <div className="my-4">
                    <div class="my-6 imagencategoria rounded-full bg-cover bg-center" />
                                
                                <thead className=''>

                                    <tr>

                                        <th style={{ width: '75%' }}>Nombre</th>

                                        <th style={{ width: '15%' }}>Opciones</th>

                                    </tr>

                                </thead>
                                <tbody className="bg-gray-200 text-gray-900 justify-center my-4">

                                    {

                                        categorias1.map(

                                            item =>

                                                <tr key={item._id}>

                                                    

                                                    <td>{item.nombre}</td>

                                                    <td>

                                                    </td>

                                                    <td>

                                                        <Link  >crear producto</Link>&nbsp;&nbsp;

                                                        <Link classNameclassName="bg-black w-full p-3 text-white font-bold block text-center my-5 rounded-full hover:cursor-pointer hover:bg-sky-600 transition-colors">Editar</Link>&nbsp;&nbsp;

                                                        <button  >Eliminar</button>

                                                    </td>

                                                </tr>

                                        )

                                    }





                                </tbody>

                                <tbody>





                                </tbody>
                                </div>  
                            </form>
                            </div>
                </main>

            </div>
        </>
    );

};

export default ListaCategorias;