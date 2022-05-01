import React from 'react';
import "../css/components/Lista.css"


const Lista = (props) => {

    return (
        <section>
            <h1>Lista</h1>
            <table>
                <tr>
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
                </tr>

                {
                    props.listaSpell.map((spell, id) => {

                        return(<tr>
                        <td>
                        <button onClick={() => props.setId(id)}>
                            {spell.name}
                        </button>
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
                    </tr>)
                    })


                }
                  
            </table> 
        </section>
    )
}

export default Lista;
