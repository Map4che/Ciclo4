import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";



    const Header = () =>{
const navigate = useNavigate();

        const cerrarSesion=()=>{
            localStorage.removeItem("token");
            navigate("/");
        }
        
    return (
    
        <header className= "px-2 py-2 bg-gray-800 border-b">
            <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-lime-600 font-black text-center mb-5 md:mb-0">
                Panel de Aministrador
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-4">
            <input
            type="submit"
            value="Cerrar Sesion"
            className="bg-gray-400 mb-5 w-full py-3 text-white uppercase font-bold rounded-full hover:cursor-pointer hover:bg-red-700 transition-colors"
            onClick= {cerrarSesion}
          />
            </div>
            </div>
        </header>
    );

    };

export default Header;