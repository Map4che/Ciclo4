import React from "react";
import {Link} from "react-router-dom";

    const Home = () =>{

    return (
    <main className='container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center'> 
        
        <div className='md:w-1/3 lg:w-2/5'>
                   
            <h1 className="my-6 text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold ">Bienvenido!! al Home</h1>

            <Link
            className="text-white font-bold block text-center my-5"
            to={"/login"}>
                Inicie sesion
            </Link>

            <Link
            className="text-white font-bold block text-center my-5"
            to={"/register"}>
                Crear Cuenta
            </Link>

            </div>
    </main>
    );

    };

export default Home;