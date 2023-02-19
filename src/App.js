import React from "react";
import { Router } from "react-router-dom";
// import { OydinPlaza } from "./components/OydinPlaza";
// import { Oydin_form } from "./components/Oydin_form";
import { Main } from "./Main";
import { Menu } from "./pages/Menu/Menu";
import { FormTable } from "./pages/Shop/FormTable";
import './style.css'
// import './oydinPlaza.css'
function App() {
  return (
    <div className="App">
        <Main/> 
        {/* <Menu/> */}
        {/* <FormTable/> */}
    </div>
  );
}

export default App;
