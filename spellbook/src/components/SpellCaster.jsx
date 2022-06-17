import React from 'react';


const SpellCaster = (props) => {

    const [spells, setSpell] = React.useState([])
    const [spell, setSpells] = React.useState([])
    const [hayCambios, setHayCambios] = React.useState(true)
   
    return (
    <section className="spellcaster">
        <form>
            <h1>Conjuros</h1>
            <table>
            <thead>
                <tr>
                    <td>Nombre</td>    
                    <td>Rango</td>
                    <td>Nivel</td> 
                    <td>Escuela</td> 
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
                        {spell.range}
                    </td>
                    <td>
                        {spell.level_int}
                    </td>
                    <td>
                        {spell.school}
                    </td>

                </tr>
            </tbody>
                
                )})
            
            }
            
        </table>


            
        </form>


    </section>
    )
}

export default SpellCaster;
