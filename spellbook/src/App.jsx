import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import React, {useState, useEffect} from "react";
import {db, auth} from './firebase';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./css/App.css";

//Componentes camelcase y props min


function App() {

  const [user, setUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user){
        setUser(user);
      } else {
        setUser(null);
      }
    });

  }, [])
  
  return user !== false ? (
    
    <main className="App">
      <Router>
        <Header firebaseUser={user}/>
        <Routes>
          <Route path="/home" element={<Home/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </main>
  ):(
    <div>Cargando...</div>
  )
}

export default App;
