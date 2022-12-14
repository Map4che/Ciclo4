import React from 'react'
import Productos from './../Productos';

export const ViewProductos = ({producto}) =>{
    
    const {nombre,descripcion,stock,precio,imagen} = producto;
    return (
        <div className = 'border-b p-5 flex justify-between item-center'>
            <div className="flex flex-col items-start">
                <p className="mb-1 text-xl text-gray-50">nombre</p>
                <p className="mb-1 text-xl text-gray-50">descripcion</p>
                <p className="mb-1 text-xl text-gray-50">stock</p>
                <p className="mb-1 text-xl text-gray-50">precio</p>
                <img src={imagen} width='150' height='150'/>
            </div>
           <div className="flex flex-col lg:flex-row gap-2">
                <button className ="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">
                    Editar
                </button>

                <button className ="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg">
                    Eliminar
                </button>

           </div>

        </div> 
        
    )
}

export default ViewProductos;
