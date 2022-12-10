import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import crud from "../conexiones/crud";

const Register=()=>{

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({

        nombre:'',
        email:'',
        password:'',
        confirmar:''
    });

    const {nombre, email, password, confirmar}= usuario;

    const onChange = (e)=>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const crearCuenta = async () =>{

        if((nombre).length===0 || (email).length===0 || (password).length===0){
            
            
            const mensaje="Todos los campos son obligatorios";
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
        }

        else if(password !== confirmar){
            
            const mensaje="La contraseña no coincide";
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

        const data = {
            nombre: usuario.nombre,
            email: usuario.email,
            password: usuario.password,
        }
        console.log(data);
        const response = await crud.POST(`/api/usuarios`, data);
        const mensaje = response.msg;
        //console.log(mensaje);

        if(mensaje ==="Este usuario ya esta registrado"){
            const mensaje="El usuario ya existe";
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
            const mensaje="El usuario ha sido creado correctamente";
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
                });

                setUsuario({
                    nombre:'',
                    email:'',
                    password:'',
                    confirmar:''
                })
                //redireccionar nuevamnete a la pagina login
                navigate("/login");
            };
    }
    };

    

    const onSubmit = (e)=>{
        e.preventDefault();
        crearCuenta();
    }

    return(
        <main className='container mx-auto mt-5 md:mt-10 p-5 md:flex md:justify-center'>
        <div className='md:w-1/3 lg:w-2/5'>
       
            
            <form 
                className="my-2 bg-gradient-to-r from-black via-gray-600 to-black shadow rounded-3xl p-10"
                onSubmit={onSubmit}
            >
                 <h1 className="text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold">Ingresa tus datos</h1>
                <div class="imagenregistro bg-cover bg-center rounded-full my-6"/>
                
            <div className="my-6">

            <label className="uppercase text-white block tect-lx font-bold">Nombre</label>
            <input 
            type="nombre"
            id="nombre"
            name= "nombre"
            placeholder="Ingrese su nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={onChange}
            />
            </div>
            <div className= "my-6">
            <label className="uppercase text-white block text-lx font-bold">Email</label>
            <input 
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={onChange}
            />
            </div>
            <div className= "my-6">
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
            </div>
            <div className= "my-6">
            <label className="uppercase text-white block tect-lx font-bold">Confirme su Password</label>
            <input 
            type="password"
            id="confirmar"
            name="confirmar"
            placeholder="Ingrese su contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={confirmar}
            onChange={onChange}
            />
        </div>
        <div className= "my-12">
            <input
                type="submit"
                value="Registrarse"
                className="bg-gray-400 mb-5 w-full py-3 text-white uppercase font-bold rounded-full hover:cursor-pointer hover:bg-lime-500 transition-colors"
            />
            
            <Link
            className="block text-center my-5 text-white font-bold"
            to={"/"}>
                Regresar
            </Link>
            </div>
            </form>
            </div>
    </main>
    )
}

export default Register;