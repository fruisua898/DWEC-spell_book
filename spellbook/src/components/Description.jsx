import React from 'react';


const Description = (props) => {
    const {spellDesc} = props; //Deconstrucción
    return (

    <section className="--box-desc">
        <h1>Descripcion</h1>
        <p>Nivel: {spellDesc.level_int}</p>
        <p>Descripcion: {spellDesc.desc}</p>
        <p>Material:</p>
    </section>

    )
}

export default Description;
