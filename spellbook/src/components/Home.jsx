import React, {useState, useEffect} from "react";
import Cargando from "./Cargando";
import SpellCaster from "./SpellCaster";
import Lista from "./Lista";

const Home = () => {

    const [spells, setSpells] = useState([]);  

    useEffect(() => {
      fetch("https://api.open5e.com/spells/?ordering=level_int&limit=321")
        .then(response => response.json())
        .then (data =>setSpells(data.results))
    }, [])

    if(spells.length === 0){
    
        return <Cargando/>;
      }
    
      //If not auth return <Login/>
      
      const filteredSpells = spells.filter((spell)=>{
        if(spell.check){
            return spell;
        }
      }
      );
      console.log(filteredSpells);



    return (
        <div>
            <SpellCaster filteredSpells={filteredSpells}/>
            <Lista listaSpell={spells} setSpells={setSpells} />
        </div>
    )
}

export default Home
