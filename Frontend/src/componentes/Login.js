import React from "react";
import {Link} from "react-router-dom";

const Login=()=>{
    return (
    <main className='container mx-auto mt-1 md:mt-10 p-4 md:flex md:justify-center'>
        
        
        <div className='md:w-2/3 lg:w-2/5'>
        
        <h1 className="inline bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl trscking-tight text-transparent">Bienvenido!!</h1>
            
            <form className="my-10 bg-gradient-to-r from-black via-gray-600 to-black shadow rounded-lg p-20">
            <div className="my-4">
                <div class="imageninicio rounded-full bg-cover bg-center"/>
            <label className="uppercase text-white block text-lx font-bold">Usuario</label>
            <input type="email"
            placeholder="Ingrese su email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
        </div>
        <div className="my-8">
            <label className="uppercase text-white block tect-lx font-bold">Password</label>
            <input type="password"
            placeholder="Ingrese su contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
        </div>

        <div className="my-4">
            <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-gray-400 mb-5 w-full py-3 text-white uppercase font-bold rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            />
        </div>
            <Link
            className="text-white font-bold block text-center my-5"
            to={"/register"}>
                Crear Cuenta
            </Link>
            
            </form>
            </div>
    </main>
    );
}

export default Login;