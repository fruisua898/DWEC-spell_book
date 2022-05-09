import React from 'react';

const SpellCaster = (props) => {
    console.log("Spell: ",props.filteredSpells);
    return (
    <section>
        <form>
            <h1>Lanzador de conjuros</h1>
            <label for="class">Clase: </label>
            <input name="class" type="text"/>   
            <label for="level">Nivel: </label>
            <input name="level" type="text"/>
        </form>

        <table>
            <thead>
                <tr>
                    <td>Nivel</td>    
                    <td>Nombre</td>    
                </tr>
            </thead>
            {props.filteredSpells.map((spell, id) => {
                return(
            
                <tbody key={id}>
                <tr> 
                    <td>
                        {spell.name}
                    </td>
                    <td>
                        {spell.level_int}
                    </td>

                </tr>
            </tbody>
                
                )})
            
            }
            
        </table>
    </section>
    )
}

export default SpellCaster;
