import React, {useState, useEffect} from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import {Link, useNavigate} from "react-router-dom";
import crud from "../conexiones/crud";


    const Productos = () =>{

        const navigate = useNavigate();

    const [producto, getProducto] = useState({

        nombre:"",
        descripcion:"",
        stock:"",
        precio:"",
        imagen:""
        
    });

    //const {nombre, descripcion, stock, precio, imagen}= producto;

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

    const [productos1, setProductos] = useState([]);

    const cargarProductos = async () => {

        const response = await crud.GET(`/api/productos`);
        console.log(response);
        setProductos(response.producto);

    }

    useEffect(() => {

        cargarProductos();

    }, [])

        
    return (
        <>
        <Header/>
        <div className="md:flex md:min-h-screen">
        <Sidebar/>
        
        <main className="flex-1">
        
        <div className="mt-10 flex justify-center">
       
        <form className="table table-bordered my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 px-10">
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

                                        productos1.map(

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
                            <div>
                                <Link 
                                className="text-white font-bold block text-center my-5"
                                to={"/homeproductos"}>Producto por categoria</Link>
                            </div>
            </div>
            
       </main>

       </div>
       </>
       );

    };

export default Productos;