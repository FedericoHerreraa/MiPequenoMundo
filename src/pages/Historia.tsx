import React from "react"


const NuestraHistoria: React.FC = () => {
    return (
        <div className="pt-20 text-center">
            <h1 className="text-3xl text-white bg-blue-950 px-20 py-5 inline">Nuestra Historia</h1>
            <div className="w-2/3 ml-auto mr-auto mt-10">
                <div className="col-span-2 py-10 px-5">
                    <p className="line leading-6 text-lg "><strong>E</strong>n un tranquilo rincón de la ciudad, se erige un encantador edificio que alberga un espacio mágico donde la risa de los  más pequeños y la ternura se entrelazan en un ballet de inocencia. Este es el Jardín de Infantes y Maternal "Mi pequeño mundo", un lugar donde los sueños de los niños comienzan a tomar forma desde temprana edad.
                    El edificio, pintado con colores brillantes y decorado con ilustraciones alegres, invita a los pequeños a adentrarse en un mundo de descubrimientos. A la entrada, un arco iris gigante da la bienvenida, simbolizando la diversidad y la promesa de un viaje emocionante. Los jardines que rodean el lugar están salpicados de flores y árboles frondosos, creando un oasis de tranquilidad y belleza.
                    Dentro de sus aulas, los educadores, con corazones rebosantes de paciencia y cariño, guían a los niños en su exploración del conocimiento y el desarrollo emocional. Los rincones de juego están diseñados para fomentar la creatividad y el trabajo en equipo, mientras que las aulas se convierten en escenarios para historias y aventuras imaginarias.
                    El maternal, con sus cunas y juguetes suaves, es el lugar donde los más pequeñitos encuentran consuelo y amor maternal. Las educadoras, como hadas madrinas, brindan cuidado y atención personalizada, creando un ambiente cálido y seguro para los bebés que dan sus primeros pasos en el mundo.
                    Cada día en el Jardín de Infantes y Maternal "Mi pequeño mundo" es una nueva página en el libro de la infancia. Los niños aprenden a compartir, a descubrir la alegría del aprendizaje y a formar amistades que durarán toda la vida. Las actividades, desde la pintura hasta las canciones, son oportunidades para cultivar la creatividad y la expresión individual.
                    A medida que el sol se pone y los pequeños regresan a sus hogares, llevan consigo no solo mochilas llenas de manualidades, sino también corazones llenos de risas y recuerdos felices. El Jardín de Infantes y Maternal "Mi pequeño mundo" se convierte así en el lugar donde los sueños de los niños comienzan a florecer, marcando el inicio de un viaje educativo y emocional que perdurará a lo largo de sus vidas.</p>
                </div>
            </div>
            <div className="flex justify-center items-center bg-zinc-300 w-screen">
                <img src="src/img/infantes.jpeg" className="" alt="" width={400} height={400}/>
                <img src="src/img/infantes2.jpeg" className="" alt="" width={400} height={400}/>
                <img src="src/img/infantes3.jpeg" className="" alt="" width={400} height={400}/>
            </div> 
        </div>
    )
}

export default NuestraHistoria