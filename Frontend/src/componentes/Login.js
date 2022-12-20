import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import crud from "../conexiones/crud";
import swal from "sweetalert";


const Login=()=>{

    const navigate = useNavigate();

    useEffect(() => {

        const autenticarUsuario = async () =>{
            const token = localStorage.getItem ('token')
            if(token){
                navigate("/admin");
            }
        }
        autenticarUsuario()
    },[navigate]);

    const [usuario, setUsuario] = useState({

        email:'',
        password:''
        
    });

    const {email, password}= usuario;

    const onChange = (e)=>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const ingresarCuenta = async () =>{

        const data = {
            email: usuario.email,
            password: usuario.password
        }
        console.log(data);
        const response = await crud.POST(`/api/auth`, data);
        const mensaje = response.msg;
        //console.log(mensaje);

        if(mensaje === "El email no esta registrado"){
            const mensaje="Usuario y/o contraseña invalido";
                swal({
                    title:"Error",
                    text:mensaje,
                    icon:"error",
                    buttons:{
                        confirm:{
                            text:"ok",
                            value: true,
                            visible: true,
                            className:"btn btn-danger",
                            closeModal:true
                        }
                    }
                });

        }else if(mensaje ==="Password incorrecto"){
            const mensaje="Usuario y/o contraseña invalido";
                swal({
                    title:"Error",
                    text:mensaje,
                    icon:"error",
                    buttons:{
                        confirm:{
                            text:"ok",
                            value: true,
                            visible: true,
                            className:"btn btn-danger",
                            closeModal:true
                        }
                    }
                });
        }else{

            const jwt = response.token;

            //Guardar la informacion el en localStorage
            localStorage.setItem('token', jwt);

             //redireccionar nuevamnete a la pagina login
             navigate("/admin");
        }


               
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        ingresarCuenta();
    }
           
    


    return (
    <main className='container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center'>
        
        
        <div className='md:w-1/3 lg:w-2/5'>
        
        
            
            <form 
            onSubmit={onSubmit}
            className="my-1 bg-gradient-to-r from-black via-gray-600 to-black shadow rounded-3xl p-20"
            >
            
            <h1 className="my-6 text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold ">Bienvenido!!</h1>
            <div className="my-4">
                <div class="my-6 imageninicio rounded-full bg-cover bg-center"/>
            <label className="uppercase text-white block text-lx font-bold">Usuario</label>
            <input 
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={onChange}
            />
        
        <div className="my-8">
            <label className="uppercase text-white block tect-lx font-bold">Password</label>
            <input 
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={onChange}
            />
        

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

            <Link
            className="bg-red-700 text-white font-bold block text-center my-5 mx-40 rounded-full"
            to={"/"}>
                Cancelar
            </Link>
            </div>
            </div>
            </form>
            </div>
            
    </main>
    );

    }

export default Login;