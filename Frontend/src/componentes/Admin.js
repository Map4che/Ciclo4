import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";


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
    },[]);//[] Asi se ejecuta una sola vez al ingresar
    
    
        const cerrarSesion=()=>{
            localStorage.removeItem("token");
            navigate("/");
        }
        
    return (
    <main className='container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center'>
        
        
        <div className='md:w-1/3 lg:w-2/5'>
        
            
            <h1 className="my-6 text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold ">Bienvenido!! a la webAdmin</h1>
           
           <input
            type="submit"
            value="Cerrar Sesion"
            className="bg-gray-400 mb-5 w-full py-3 text-white uppercase font-bold rounded-full hover:cursor-pointer hover:bg-red-700 transition-colors"
            onClick= {cerrarSesion}
          />
           
            </div>
    </main>
    );

    };

export default Admin;