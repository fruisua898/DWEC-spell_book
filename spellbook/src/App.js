import React, {useState, useEffect} from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import Jugador from "./components/Jugador";
import Lista from "./components/Lista";
import Cargando from "./components/Cargando";
import "./css/App.css";

//COmponentes camelcase y props min

function App() {

  const [spells, setSpells] = useState([]);
  const [index, setIndex] = useState(0); //Hook index

  useEffect(() => {
    fetch("https://api.open5e.com/spells/?ordering=level_int&limit=321")
      .then(response => response.json())
      .then (data =>setSpells(data.results))
  }, [])

  

  if(spells.length === 0){
    
    return <Cargando/>;
  }
  return (
    <main className="App">

      <Header/>
      <Jugador/>
      <Lista listaSpell={spells} setId={setIndex}/>
      <Description spellDesc={spells[index]}/>
    </main>
  );
}

export default App;
