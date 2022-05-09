import React from 'react';



const Lista = (props) => {
    const {listaSpell, setSpells} = props;

    function handleCheck(value, id){
        const newListaSpell = [...listaSpell];
        newListaSpell[id].check = !value;
        setSpells(newListaSpell);
    }

    console.log(props.listaSpell);    
    return (
        <section className="spellList">
            <h1>Lista</h1>
            <table>
                <thead>
                    <label for="busqueda">Busqueda</label>
                    <input id="busqueda" type="search"/>
                </thead>
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
                <tr>
                    <td><button>+</button></td>
                    <td><button>+</button></td>
                    <td><button>+</button></td>
                    <td></td>
                </tr>
                </thead>

                {
                    props.listaSpell.map((spell, id) => {

                        
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
                                <input type="checkbox" onClick={()=>handleCheck(spell.check, id)} value={spell.check || false}></input> 
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
