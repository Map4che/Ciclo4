import React, { useState, useEffect } from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import crud from "../conexiones/crud";
import swal from "sweetalert";



const Admin = () => {



    const navigate = useNavigate();

    
    useEffect(() => {

        const autenticarUsuario = async () =>{
            const token = localStorage.getItem ('token')
            if(!token){
                navigate("/login");
            }
        }
        autenticarUsuario()
    },[navigate]);


    const [categoria, setCategoria] = useState([]);

    const cargarCategorias = async()=>{

        const response = await crud.GET (`/api/categorias`);
        console.log(response);
        setCategoria(response.categoria);
    }

        useEffect(()=>{
            cargarCategorias();
        },[]);


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

        const actualizarCategoria = async (idCategoria) => {
        
            navigate(`/actcategoria/${idCategoria}`);
        
        }

        const crearProductos = async (idCategoria) =>{
            navigate(`/crearproducto/${idCategoria}`);
        }


    return (
        <>
            <Header />
            <div className="md:flex md:min-h-screen">
                <Sidebar />

                <main className="flex-1">

                    <div className="mt-3 flex justify-center bg-cover">

                        <table className="table table-bordered mx-2 my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-2xl p-10 px-10">
                            <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold"> Lista de Categorias</h1>

                            <div className="my-8 mx-5">
                                <div class="my-2 imagencategoria rounded-full bg-cover bg-center mb-10" />

                                <thead className='font-extrabold'>

                                    <tr>
                                        <th className="bg-red-500" style={{ width: '30%' }}>Imagen</th>

                                        <th className="bg-red-500" style={{ width: '5%' }}>Nombre</th>

                                        <th className="bg-red-500" style={{ width: '25% '}}>idCategoria</th>

                                        <th className="bg-red-500" style={{ width: '30%' }}>Opciones</th>

                                    </tr>

                                </thead>
                                <tbody className="bg-gray-200 text-gray-900 justify-center my-4 text-center">

                                    {

                                        categoria.map(

                                            item =>

                                                <tr key={item._id}>
                                                    <td><img src={item.imagen} width="200" height="200"
                                                    className="rounded-2xl ml-2 mb-4 ml-20"></img></td>
                                                    <td><h3 className="font-bold">{item.nombre}</h3></td>
                                                    <td><h3 className="font-bold">{item._id}</h3></td>
                                                    <td>
                                                       

                                                        <input 
                                                            type="submit"
                                                            value="Crear producto"
                                                            className="w-10/12 bg-violet-900 mt-5  px-10 py-4 text-white font-bold my-1 mr-0 hover:cursor-pointer hover:bg-violet-600 transition-colors rounded-3xl"
                                                            onClick={(e) => crearProductos(item._id)}
                                                        />

                                                        <input 
                                                            type="submit"
                                                            value="Actualizar"
                                                            className="w-10/12  bg-violet-900 px-20 py-4  text-white font-bold mb-1 mr-0 hover:cursor-pointer hover:bg-violet-600 transition-colors rounded-3xl"
                                                            onClick={(e) => actualizarCategoria(item._id)}
                                                        />

                                                        <input
                                                            type="submit"
                                                            value="Eliminar"
                                                            className="w-10/12  bg-orange-800 px-20 py-4  text-white font-bold mb-10 mr-0 hover:cursor-pointer hover:bg-red-500 transition-colors rounded-3xl"
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
                        </table>
                    </div>
                </main>

            </div>
        </>
    );

                                };

export default Admin;