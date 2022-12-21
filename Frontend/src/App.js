import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Home from "./componentes/Home";
import Admin from "./componentes/Admin";
import Categorias from "./componentes/Categorias";
import Productos from "./componentes/Productos";
import ListaProductos from "./componentes/ListaProductos";
import ProductosXCategoria from "./componentes/productos/ProductosXCategoria";
import ActualizarCategorias from './componentes/categorias/ActualizarCategorias';
import CrearProductos from './componentes/productos/CrearProductos';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/admin" exact element={<Admin/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/categorias" exact element={<Categorias/>}/>
        <Route path="/productos" exact element={<Productos/>}/>
        <Route path="/listaproductos" exact element= {<ListaProductos/>}/>
        <Route path="/categoria/:id"exact element={<ProductosXCategoria/>}/>
        <Route path="/actcategoria/:idCategoria" exact element={<ActualizarCategorias/>}/>
        <Route path="/crearproducto/:idCategoria" exact element={<CrearProductos/>}/>
      </Routes>
    </Router>
  );
}

export default App;