import React  from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./css/App.css";

//Componentes camelcase y props min

function App() {

  return (
    <main className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
