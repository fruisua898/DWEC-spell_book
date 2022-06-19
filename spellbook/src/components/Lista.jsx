import React, {useEffect, useState} from 'react';
import {auth, db} from '../firebase'
import firebase from 'firebase/app'

const Lista = (props) => {

    const {listaSpell, setSpells} = props;
    const [search, setSearch] = useState("");

    const user = auth.currentUser;
    var path = db.collection("hechizos").doc(user.email); 


    useEffect(() => {
        path.get().then((doc) => {
            const spellsIds = doc.data().id
            const spellsChecks = listaSpell.map((spell, id) => (
                spellsIds.includes(id)?{...spell, check:true}:spell
            ))
            console.log(spellsChecks)
            setSpells([...spellsChecks])
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])
    
    function handleCheck(value, id){      
        const newListaSpell = [...listaSpell];
         
        if (newListaSpell[id].check =!value){
            
            path.update({
                id: firebase.firestore.FieldValue.arrayUnion(id)
            });
             
         } else {

            path.update({
                id: firebase.firestore.FieldValue.arrayRemove(id)
            });
         }
        newListaSpell[id].check = !value;
        setSpells(newListaSpell);
        
        
    }   
    const filteredSpellsBySearch = listaSpell.filter(spell => spell.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <section className="spellList">
            <h1>Lista</h1>
            <input placeholder="Filter by name ..." type="search" value={search} onChange={ event => setSearch(event.target.value)}/>
            <table>

                <thead>
                
                <tr className="tableheader">
                    
                    <td>
                        Nombre
                    </td>
                    <td>
                        Nivel
                    </td>
                    
                    <td>
                        Escuela
                    </td>
                    
                    <td>
                        Range
                    </td>
                    <td></td>
                    <td></td>
                </tr>

                </thead>

                {
                    filteredSpellsBySearch.map((spell, id) => {

                        console.log(spell.check, spell.name)
                        return(<tbody key={id}>
                        
                        <tr>
                            <td>
                                {spell.name}
                            </td>

                            <td>
                                {spell.level_int}
                            </td>
                                
                            <td>
                                {spell.school}
                            </td>

                            <td>
                                {spell.range}
                            </td>
                            <td>

                            </td>
                    
                            <td>
                                <input type="checkbox" onClick={()=>handleCheck(spell.check, spell.id)} checked={spell.check || false}></input> 
                                {/* Short circuit - Evitar tipado indeseado */}
                            </td>
                        </tr>
                        <tr className="desSpell">
                            <td colSpan="6">
                                <details>
                                    <summary/> 
                                        {spell.desc}
                                </details>
                            </td>
                        </tr>
                    </tbody>)
                    })


                }
                  
            </table> 
        </section>
    )
}

export default Lista;
