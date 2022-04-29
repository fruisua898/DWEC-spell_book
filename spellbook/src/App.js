import React from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import Jugador from "./components/Jugador";
import Lista from "./components/Lista";
import "./css/App.css";

function App() {
  return (
    <main className="App">
      <Header/>
      <Jugador/>
      <Lista/>
      <Description/>
    </main>
  );
}

export default App;
