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

        const response = await crud.GET (`/api/productos/home`);
        console.log(response);
        setProducto(response.productos);
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
                        //console.log(response);
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
       
        <table className="my-10 mx-4 table table-bordered my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 px-10">
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold"> Lista de Productos</h1>

                    <div className="my-4 mx-5">
                    <div class="my-6  imagenproducto rounded-full bg-cover bg-center" />
                                
                                <thead className=''>

                                    <tr>

                                        <th className="relative justify-center ml-3 bg-red-500" style={{ width: '5%' }}>Nombre</th>
                                        <th className="relative justify-center ml-3 bg-red-500" style={{ width: '15%' }}>Descripcion</th>
                                        <th className="relative justify-center ml-3 bg-red-500" style={{ width: '10%' }}>Stock</th>
                                        <th className="relative justify-center bg-red-500"style={{ width: '5%' }}>Precio</th>
                                        <th className="relative justify-center bg-red-500" style={{ width: '5%' }}>Imagen</th>
                                        <th className="relative justify-center ml-3 bg-red-500" style={{ width: '5%' }}>Categoria</th>

                                        <th className="relative justify-center bg-red-500" style={{ width: '5%' }}>Opciones</th>

                                    </tr>

                                </thead>
                                <tbody className="bg-gray-300 text-gray-900 justify-center my-4">

                                    {

                                        producto.map(

                                            item =>

                                                <tr key={item._id}>

                                                    

                                                    <td className="relative justify-center text-center">{item.nombre}</td>
                                                    <td className="relative justify-center text-center">{item.descripcion}</td>
                                                    <td className="relative justify-center text-center">{item.stock}</td>
                                                    <td className="relative justify-center text-center">{item.precio}</td>
                                                    <td ><img src={item.imagen} className="relative justify-center text-center" width="150" height="150"></img></td>
                                                    <td className="relative justify-center text-center">{item.categoriaId}</td>

                                                    <td>
                                                        <input
                                                            type="submit"
                                                            value="Actualizar"
                                                            className="w-10/12 bg-violet-900 mt-5  px-10 py-4 text-white font-bold my-1 mr-3 hover:cursor-pointer hover:bg-violet-600 transition-colors rounded-3xl ml-10"
                                                            onClick={(e) => actualizarProducto(item._id)}
                                                        />

                                                        <input
                                                            type="submit"
                                                            value="Eliminar"
                                                            className="w-10/12 bg-orange-800 px-20 py-4  text-white font-bold mb-10 mr-3 hover:cursor-pointer hover:bg-red-500 transition-colors rounded-3xl ml-10"
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