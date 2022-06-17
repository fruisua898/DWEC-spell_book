import React, {useState, useEffect, useRef} from "react";
import Cargando from "./Cargando";
import SpellCaster from "./SpellCaster";
import Lista from "./Lista";
import {db, auth} from "../firebase";
import {Navigate, useNavigate} from 'react-router-dom'


const Home = () => {
  

  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  /* Si hay user se queda en home, si no tira para login */

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser)
    }else {
      navigate("/login");
    }
  },[])

  /*const filteredSpellsRef = useRef([]); //
  
  const checkSpells = spells => {
    const data = db.collection("hechizos").doc(auth.currentUser.email).get()
    //const arrayData = data.docs.map (doc => ({id:doc.id}))
    console.log(data)
    spells.map(() => {
      
    })
  }
  */

  const [spells, setSpells] = useState([]);  

  useEffect(() => {
    fetch("https://api.open5e.com/spells/?ordering=level_int&limit=321")
      .then(response => response.json())
      .then (data =>setSpells(data.results))
  },[])

    if(spells.length === 0){
    
        return <Cargando/>;
      }
   
      const filteredSpells = spells.filter((spell)=>{
        if(spell.check){
            return spell;
        }
      }
      );

    return (
        <div>
            <SpellCaster filteredSpells={filteredSpells}/>
            <Lista listaSpell={spells} setSpells={setSpells}/>
        </div>
    )
}

export default Home
