import React from 'react';


const SpellCaster = (props) => {

   
    return (
    <section className="spellcaster">
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

</section>
    )
}

export default SpellCaster;
