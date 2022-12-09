import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Sidebar from "./Sidebar";


    const Admin = () =>{

       

    const navigate = useNavigate();

    useEffect(() =>{
        const autenticarUsuario = async () =>{
            const token = localStorage.getItem("token");
            //console.log(token);
            if(!token){
                navigate("/login");
            }
        }
        autenticarUsuario()
    },[navigate]); //[] Asi se ejecuta una sola vez al ingresar
    
    
        const cerrarSesion=()=>{
            localStorage.removeItem("token");
            navigate("/");
        }
        
    return (
    
            <>
                <Header/>
                <div className="md:flex md:min-h-screen">
                <Sidebar/>
                <div>
                <h1 className="my-6 text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold ">Bienvenido</h1>
                <h4 className="my-6 text-center py-4 px-4 font-sans font-bold text-white">Por medio de la pagina de administrador podras ver, crear, actualizar y eliminar las categorias o productos de nuestro Ecommerce</h4>
                </div>
                </div>
            </>
    );

    };

export default Admin;