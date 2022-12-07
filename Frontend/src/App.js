import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Home from "./componentes/Home";
import Admin from "./componentes/Admin";
import Categorias from "./componentes/Categorias";
import Productos from "./componentes/Productos";
import ListaProductos from "./componentes/ListaProductos";
import ListaCategorias from "./componentes/ListaCategorias";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="register" exact element={<Register/>}/>
        <Route path="/admin" exact element={<Admin/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/categorias" exact element={<Categorias/>}/>
        <Route path="/productos" exact element={<Productos/>}/>
        <Route path="/listaproductos" exact element= {<ListaProductos/>}/>
        <Route path="/listacategorias" exact element={<ListaCategorias/>}/>
      </Routes>
    </Router>
  );
}

export default App;