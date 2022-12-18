import React, {useState, useEffect} from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import {Link, useNavigate} from "react-router-dom";
import crud from "../conexiones/crud";
import swal from "sweetalert";


    const Productos = () =>{

        const navigate = useNavigate();

        /*
    const [producto, getProducto] = useState({

        nombre:"",
        descripcion:"",
        stock:"",
        precio:"",
        imagen:""
        
    });

    const {nombre, descripcion, stock, precio, imagen}= producto;

    const onChange = (e)=>{
        getProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };
        
    /*const listaProductos = async () =>{

        const data = {
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precio:producto.precio,
            imagen: producto.imagen
        }
        console.log(data);
        const response = await crud.GET(`/api/productos`, data);
        const mensaje = response.msg;
        console.log(mensaje);
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        listaProductos();
    }*/

    const [producto, setProducto] = useState([]);

    const cargarProductos = async()=>{

        const response = await crud.GET (`/api/productos`);
        console.log(response);
        setProducto(response.producto);
    }

        useEffect(()=>{
            cargarProductos();
        },[]);


        const borrarProducto = async (e, idProducto) => {
            e.preventDefault();
    
            swal({
                title: "Seguro quieres eliminar este Producto?",
                text: "Una vez eliminado no se podra recuperar la información!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
    
                        const response = crud.DELETE(`/api/productos/${idProducto}`);
                        const mensaje = response.msg;
                        //console.log(response.msg);
    
                        if (response) {
                            swal("El Producto ha sido eliminada exitosamente!", {
                                icon: "success",
                            }); cargarProductos();
                        }
    
    
                    } else {
                        swal({
                            text: "No se ha realizado ningun cambio!",
                            icon: "error"
                        });
                    } cargarProductos();
    
                });
        }

        const actualizarProducto = async (idProducto) => {
        
            navigate(`/actproductos/${idProducto}`);
        
        }

        
    return (
        <>
        <Header/>
        <div className="md:flex md:min-h-screen">
        <Sidebar/>
        
        <main className="flex-1">
        
        <div className="mt-3 flex justify-center">
       
        <table className="table table-bordered my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 px-10">
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold"> Lista de Productos</h1>

                    <div className="my-4">
                    <div class="my-6 imagenproducto rounded-full bg-cover bg-center" />
                                
                                <thead className=''>

                                    <tr>

                                        <th style={{ width: '10%' }}>Nombre</th>
                                        <th style={{ width: '10%' }}>Descripcion</th>
                                        <th style={{ width: '10%' }}>Stock</th>
                                        <th style={{ width: '10%' }}>Precio</th>
                                        <th style={{ width: '10%' }}>Imagen</th>
                                        <th style={{ width: '10%' }}>Categoria</th>

                                        <th style={{ width: '30%' }}>Opciones</th>

                                    </tr>

                                </thead>
                                <tbody className="bg-gray-300 text-gray-900 justify-center my-4">

                                    {

                                        producto.map(

                                            item =>

                                                <tr key={item._id}>

                                                    

                                                    <td>{item.nombre}</td>
                                                    <td>{item.descripcion}</td>
                                                    <td>{item.stock}</td>
                                                    <td>{item.precio}</td>
                                                    <td><img src={item.imagen} width="150" height="150"></img></td>
                                                    <td>{item.categoriaId}</td>

                                                    <td>

                                                    </td>

                                                    <td>

                                                    <input 
                                                            type="submit"
                                                            value="Crear producto"
                                                            className="w-full bg-violet-800 mt-5 px-20 py-4 text-white font-bold my-1 mr-3 hover:cursor-pointer hover:bg-lime-500 transition-colors"
                                                            onClick={(e) => actualizarProducto(e, item._id)}
                                                        />

                                                        <input
                                                            type="submit"
                                                            value="Actualizar"
                                                            className="bg-violet-900 py-3 text-white font-bold"
                                                            onClick={(e) => actualizarProducto(e, item._id)}
                                                        />

                                                        <input
                                                            type="submit"
                                                            value="Eliminar"
                                                            className="bg-violet-900 py-3 text-white font-bold"
                                                            onClick={(e) => borrarProducto(e, item._id)}
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

export default Productos;