import React from "react"

export const Main: React.FC = () => {
    return (
        <div>
            <div>
                <div className="bg-blue-950 ml-auto mr-auto w-1/4 mt-20 text-center py-6 shadow-xl">
                    <h2 className="text-4xl text-white">Maternal</h2>
                </div>
                <div className="m-10 w-2/3 ml-auto mr-auto">
                    <p>
                        En el Jardín Maternal, damos la bienvenida a los más pequeñitos con los brazos abiertos, creando un ambiente amoroso y seguro donde florece el desarrollo temprano. En este período crucial de crecimiento, nos esforzamos por ser un segundo hogar para los bebés y niños pequeños, brindando cuidado afectuoso y atención personalizada.
                        Nuestro equipo altamente capacitado de cuidadores y educadores comprende las necesidades únicas de los bebés y niños pequeños, ofreciendo un entorno estimulante que fomente el desarrollo físico, emocional y cognitivo. En el Jardín Maternal, nos enorgullece ser un lugar donde los padres confían en dejar a sus pequeños, sabiendo que están en manos expertas y amorosas.
                        Cada día en el Jardín Maternal está lleno de actividades diseñadas para estimular los sentidos y fomentar la exploración segura. Valoramos la comunicación abierta con los padres y nos esforzamos por construir una sólida relación de confianza para garantizar el bienestar y la felicidad de cada niño.
                        Recuerda personalizar estos ejemplos según la filosofía y valores específicos de tu jardín de infantes y jardín maternal. ¡Buena suerte con tu página web para el jardín de niños!
                    </p>
                    <div className="flex gap-5 mt-10 justify-center">
                        <img src="src/img/maternal.jpg" alt="imagen infantes" title="infantes" width={400}/>
                        <img src="src/img/maternal2.jpeg"  alt="imagen infantes" title="infantes" width={400}/>
                        <img src="src/img/maternal3.jpeg" alt="imagen infantes" title="infantes" width={400}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-red-900 ml-auto mr-auto w-1/4 text-center py-6 mt-40 shadow-xl">
                    <h2 className="text-4xl text-white">Infantes</h2>
                </div>
                <div className="m-10 w-2/3 ml-auto mr-auto">
                    <p>
                        Bienvenidos al Jardín de Infantes, un lugar mágico donde los pequeños exploradores comienzan su emocionante viaje educativo. En nuestro cálido y acogedor entorno, fomentamos el crecimiento y el desarrollo integral de los niños en sus años formativos.
                        En el Jardín de Infantes, nos dedicamos a proporcionar una educación preescolar de calidad que nutre la curiosidad natural de los niños y fomenta su amor por el aprendizaje. Contamos con un equipo de educadores altamente calificados y apasionados que guían a los niños a medida que exploran, descubren y crean en un ambiente seguro y estimulante.
                        Nuestro enfoque educativo se centra en el juego, la creatividad y la interacción social, brindando a los niños oportunidades para desarrollar habilidades sociales, emocionales, cognitivas y físicas. En el Jardín de Infantes, cada día es una nueva aventura llena de risas, descubrimientos y amistades duraderas.
                    </p>
                    <div className="flex gap-5 mt-10 justify-center">
                        <img src="src/img/infantes.jpeg" alt="imagen maternal" title="maternal" width={400} />
                        <img src="src/img/infantes2.jpeg"  alt="imagen maternal" title="maternal" width={400}/>
                        <img src="src/img/infantes3.jpeg" alt="imagen maternal" title="maternal" width={400}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
