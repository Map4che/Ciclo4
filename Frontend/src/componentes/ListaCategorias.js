import React, { useState, useEffect } from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import crud from "../conexiones/crud";
import swal from "sweetalert";



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

    const actualizarCategoria = async (idCategoria) => {
        const response = await crud.PUT(`/api/categorias/${idCategoria}`);
    }

    const borrarCategoria = async (e, idCategoria) => {
        e.preventDefault();

        swal({
            title: "Seguro quieres eliminar esta categoria?",
            text: "Una vez eliminado no se podra recuperar la información!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    const response = crud.DELETE(`/api/categorias/${idCategoria}`);
                    const mensaje = response.msg;
                    //console.log(response.msg);

                    if (response) {
                        swal("La Categoria ha sido eliminada exitosamente!", {
                            icon: "success",
                        }); cargarCategorias();
                    }


                } else {
                    swal({
                        text: "No se ha realizado ningun cambio!",
                        icon: "error"
                    });
                } cargarCategorias();

            });
    }



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
                                        <th style={{ width: '30%' }}>Imagen</th>

                                        <th style={{ width: '45%' }}>Nombre</th>

                                        <th style={{ width: '15%' }}>Opciones</th>

                                    </tr>

                                </thead>
                                <tbody className="bg-gray-200 text-gray-900 justify-center my-4">

                                    {

                                        categorias1.map(

                                            item =>

                                                <tr key={item._id}>
                                                    <td><img src={item.imagen} width="150" height="150"></img></td>
                                                    <td>{item.nombre}</td>
                                                    <td>
                                                        <Link to="/productos">crear producto</Link>&nbsp;&nbsp;

                                                        <input
                                                            type="submit"
                                                            value="Actualizar"
                                                            className="bg-violet-900 py-3 text-white font-bold"
                                                            onClick={(e) => actualizarCategoria(e, item._id)}
                                                        />

                                                        <input
                                                            type="submit"
                                                            value="Eliminar"
                                                            className="bg-violet-900 py-3 text-white font-bold"
                                                            onClick={(e) => borrarCategoria(e, item._id)}
                                                        />

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