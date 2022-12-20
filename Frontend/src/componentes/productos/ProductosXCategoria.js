import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from 'react-router-dom';
import crud from '../../conexiones/crud';
import swal from 'sweetalert';


const ProductosXCategoria = () =>{

    
    const {idCategoria}=useParams();

    const [categoria, setCategoria] = useState([]);
        
    const cargarCategorias = async () =>{
        const response = await crud.GET(`/api/categorias/home`);
        setCategoria (response.categoria);
    }
    useEffect(()=>{
        cargarCategorias();
    },[]);

    const [producto, setProducto] = useState([]);
    
    const cargarProductos = async () =>{
        const response = await crud.GET(`/api/productos/home/${idCategoria}`);
        setProducto (response.productos);
    }
    console.log(producto);
    useEffect(()=>{
        cargarProductos();
    },[]);

    
    

return (
<main className='flex-1'> 
    <div className='md:w-1/3 lg:w-2/5'></div>
    <header className= "px-4 py-3 bg-gray-800 border-b">
        <div className="md:flex md:justify-between ">
        <h2 className="text-4xl text-lime-600 font-black text-center mb-5 md:mb-0 ">
            Panel de Aministrador
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 "></div>
    
               
        <Link
        className="text-white font-bold block text-center my-5 hover:cursor-pointer hover:bg-lime-500 transition-colors"
        to={"/admin"}>
            Panel Admin
        </Link>

        <Link
        className="text-white font-bold block text-center my-5 hover:cursor-pointer hover:bg-lime-500 transition-colors"
        to={"/login"}>
            Inicie sesion
        </Link>

        <Link
        className="text-white font-bold block text-center my-5 hover:cursor-pointer hover:bg-lime-500 transition-colors mr-20 ml-2"
        to={"/register"}>
            Crear Cuenta
        </Link>

        </div>
        </header>
       
     <section class="text-gray-400 bg-gray-900 ">
     <h1 className="my-6 text-center bg-gradient-to-r from-red-700 via-orange-400 to-red-700 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold ">Bienvenido!! Ecommerce T!C</h1>


     
      
        <div className="relative box-content overflow-x-auto py-2 xl:overflow-visible">
          <div className="xl:grid-cols-6 my-5 mx-5 min-w-screen-xl absolute flex space-x-8 sm:px-6 lg:px-5 xl:relative xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-x-0 xl:px-0">
         
           {categoria.map((category) => (
              <a
                key={category.nombre}
                href="/categoria/:id"
                className="relative flex h-10 flex-col overflow-hidden p-20 hover:opacity-60 xl:w-auto rounded-full mx-auto my-2"
              >
                <span aria-hidden="true" className="absolute inset-0">
                 
                  <img src={category.imagen} alt="" className="h-full w-full object-cover object-center" />
                  
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                />
                <span className="relative mt-auto text-center text-xl font-bold text-white">{category.nombre}</span>
              </a>
            ))}
          </div>
          </div>
      
              
              
              </section>
      
              
      <section class="text-gray-400 body-font">
      <div className="container px-5 py-5 mx-auto"> 
     
      
      <div className="my-4 mx-8 gap-4 p-4 ">
        <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
          <div className="my-auto mx-auto min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-4 xl:gap-x-4 xl:space-x-0 xl:px-0">
          {producto.map((product) => (
            
            <a key={product.nombre}
            >
           
           <div 
          >
            <a >
        <img width="300px" height="300px" 
        className=" mx-4 my-5 rounded-2xl"
        src={product.imagen}
        alt={product.imageAlt}
         
        />
      
      <div class="mt-1">
      <h3 class="text-gray-300 text-xs tracking-widest title-font mb-0">{product.categoriaId}</h3>
  <h2 class="text-white title-font text-lg font-medium">{product.nombre}</h2>
  <p class="text-gray-200 mt-0">Precio: ${product.precio}</p>
  <p class="text-gray-200 mt-0 mb-0">Stock:{product.stock}</p>
  
</div>

<a

className="mb-8 w-3/4 relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-1 px-1 text-sm font-medium text-gray-900 hover:bg-gray-200"
>
Add to bag<span className="sr-only">, {product.name}</span>
</a>
</a>
</div>

</a>

          
        ))}
          </div>
          </div>
      </div>
              </div>
  
       

</section>

</main>
);

};



export default ProductosXCategoria;