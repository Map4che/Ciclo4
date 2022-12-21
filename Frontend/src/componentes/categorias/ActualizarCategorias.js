import React, {useState, useEffect} from "react";
import Header from '../Header';
import Sidebar from "../Sidebar";
import {Link, useNavigate, useParams} from "react-router-dom";
import crud from "../../conexiones/crud";
import swal from "sweetalert";


    const ActualizarCategorias = () =>{

        const navigate = useNavigate();

    const {idCategoria} = useParams();
    //console.log(idCategoria);

    const [categoria, setCategoria] = useState({
        nombre:"",
        imagen:""
    })

    const cargarCategoria = async ()=>{
        const response = await crud.GET(`/api/categorias/${idCategoria}`);
        console.log(response);
        setCategoria(response.categoria);
    }

    useEffect(()=>{
        cargarCategoria();
    },[]);

    //console.log(categoria);

    const {nombre, imagen} = categoria;

    const onChange = (e) => {
        setCategoria({
            ...categoria,
                [e.target.name]: e.target.value
            })
    }

    const actualizarCategoria = async()=>{
        const data = {
            nombre: categoria.nombre,
            imagen: categoria.imagen
        }
        const response = await crud.PUT(`/api/categorias/${idCategoria}`, data);
        const mensaje = "La categoria se actualizo correctamente";
        swal({
            title:"Informacion",
            text:mensaje,
            icon:"success",
            buttons:{
                confirm:{
                    text:"ok",
                    value: true,
                    visible: true,
                    className:"btn btn-primary",
                    closeModal:true
                }
            }
        })
        navigate ("/admin");
    }

    const onSubmit =(e) =>{
        e.preventDefault();
        actualizarCategoria();
    }
        
    return (
        <>
        <Header/>
        <div className="md:flex md:min-h-screen">
        <Sidebar/>
        
        <main className="flex-1">
        
        <div className="mt-10 flex justify-center">
       
       <form 
            onSubmit={onSubmit}
            className=" my-4 bg-gradient-to-r from-gray-600 via-gray-300 to-black shadow rounded-3xl p-10 "
            >
                    <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold">Actualizar Categoria</h1>

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
        
        <label className="uppercase text-white block text-lx font-bold">Ingrese la URL de la imagen: </label>
            <input 
            type="text"
            id="imagen"
            name="imagen"
            placeholder="URL de la imagen"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={imagen}
            onChange={onChange}
            />

        <div className="my-4">
            <input
                type="submit"
                value="Actualizar Categoria"
                className="bg-gray-400 mb-5 w-full py-3 text-white uppercase font-bold rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            />
        </div>

        <Link
            className="bg-red-700 text-white font-bold block text-center my-5 mx-40 rounded-full"
            to={"/admin"}>
                Cancelar
            </Link>
          
            </div>
            </form>
            </div>
       </main>

       </div>
       </>
       );

    };

export default ActualizarCategorias;