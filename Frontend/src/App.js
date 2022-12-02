import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import Recover from "./componentes/Recover";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="register" exact element={<Register/>}/>
        <Route path="recover" exact element={<Recover/>}/>
      </Routes>
    </Router>
  );
}

export default App;