import React from 'react';

const Lista = (props) => {

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
                        props.setId(id);
                        console.log(id);
                        return(<thead>
  
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
                                <input type="checkbox"></input> 
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
                    </thead>)
                    })


                }
                  
            </table> 
        </section>
    )
}

export default Lista;
