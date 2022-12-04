import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Home from "./componentes/Home";
import Admin from "./componentes/Admin";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="register" exact element={<Register/>}/>
        <Route path="/admin" exact element={<Admin/>}/>
        <Route path="/login" exact element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;