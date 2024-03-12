import React from "react"
import mat1 from '../../img/mat1.png'
import mat2 from '../../img/mat2.png'
import mat3 from '../../img/mat3.png'
import inf1 from '../../img/inf1.png'
import inf2 from '../../img/inf2.png'
import inf3 from '../../img/inf3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './Main.module.css'
import { Carousel } from 'react-bootstrap';

export const Main: React.FC = () => {
    const esMobile = () => window.innerWidth < 768;

    return (
        <div>
            <div>
                <div className="h-16 shadow-2xl mb-20 flex justify-center items-center">
                    <h1 className="text-2xl text-blue-900"></h1>
                </div>
                <div className="bg-blue-950 h-32 mt-20 text-center flex items-center justify-center opacity-85 py-6 shadow-xl border-y-2 border-solid border-red-700">
                    <h2 className="md:text-5xl text-white font-mono text-4xl">Maternal</h2>
                </div>
                <div className="md:mr-40 md:ml-40">
                    <div className="md:flex md:justify-center mx-4 sm:mx-4 text-base my-3">
                        <p>
                            <strong>E</strong>n el Jardín Maternal, damos la bienvenida a los más pequeñitos con los brazos abiertos, creando un ambiente amoroso y seguro donde florece el desarrollo temprano. En este período crucial de crecimiento, nos esforzamos por ser un segundo hogar para los bebés y niños pequeños, brindando cuidado afectuoso y atención personalizada.
                            Nuestro equipo altamente capacitado de cuidadores y educadores comprende las necesidades únicas de los bebés y niños pequeños, ofreciendo un entorno estimulante que fomente el desarrollo físico, emocional y cognitivo. En el Jardín Maternal, nos enorgullece ser un lugar donde los padres confían en dejar a sus pequeños, sabiendo que están en manos expertas y amorosas.
                            Cada día en el Jardín Maternal está lleno de actividades diseñadas para estimular los sentidos y fomentar la exploración segura. Valoramos la comunicación abierta con los padres y nos esforzamos por construir una sólida relación de confianza para garantizar el bienestar y la felicidad de cada niño.
                            Recuerda personalizar estos ejemplos según la filosofía y valores específicos de tu jardín de infantes y jardín maternal. ¡Buena suerte con tu página web para el jardín de niños!
                        </p>
                    </div>
                </div>
                {
                    esMobile() ? (
                        <div className="h-96 shadow-2xl">
                            <Carousel className="h-72 pt-3">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-full h-80"
                                        src={mat1}
                                        alt="Primera imagen"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-full h-80"
                                        src={mat2}
                                        alt="Segunda imagen"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-full h-80"
                                        src={mat3}
                                        alt="Tercera imagen"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    ) : (
                        <div className="flex gap-5 mt-10 justify-center shadow-2xl py-5 ">
                            <img src={mat1} alt="imagen infantes" className="rounded-full border border-slate-400" title="infantes" width={300} />
                            <img src={mat2} alt="imagen infantes" className="rounded-full border border-slate-400" title="infantes" width={300} />
                            <img src={mat3} alt="imagen infantes" className="rounded-full border border-slate-400" title="infantes" width={300} />
                        </div>
                    )
                }
            </div>
            <div>
                <div className="bg-red-800 flex items-center justify-center h-32 opacity-85 text-center py-6 mt-40 shadow-xl border-y-2 border-solid border-blue-700">
                    <h2 className="md:text-5xl text-white font-mono text-4xl">Infantes</h2>
                </div>
                <div className="md:mr-40 md:ml-40">
                    <div className="md:flex md:justify-center md:mx-40 mx-4 text-base my-3">
                        <p>
                            <strong>B</strong>ienvenidos al Jardín de Infantes, un lugar mágico donde los pequeños exploradores comienzan su emocionante viaje educativo. En nuestro cálido y acogedor entorno, fomentamos el crecimiento y el desarrollo integral de los niños en sus años formativos.
                            En el Jardín de Infantes, nos dedicamos a proporcionar una educación preescolar de calidad que nutre la curiosidad natural de los niños y fomenta su amor por el aprendizaje. Contamos con un equipo de educadores altamente calificados y apasionados que guían a los niños a medida que exploran, descubren y crean en un ambiente seguro y estimulante.
                            Nuestro enfoque educativo se centra en el juego, la creatividad y la interacción social, brindando a los niños oportunidades para desarrollar habilidades sociales, emocionales, cognitivas y físicas. En el Jardín de Infantes, cada día es una nueva aventura llena de risas, descubrimientos y amistades duraderas.
                        </p>
                    </div>
                </div>
                {
                    esMobile() ? (
                        <div className="h-96 shadow-2xl">
                            <Carousel className="h-72 pt-3">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-full h-80"
                                        src={inf1}
                                        alt="Primera imagen"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-full h-80"
                                        src={inf2}
                                        alt="Segunda imagen"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-full h-80"
                                        src={inf3}
                                        alt="Tercera imagen"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    ) : (
                        <div className="flex gap-5 mt-10 justify-center shadow-2xl py-5">
                            <img src={inf1} alt="imagen maternal" className="rounded-full border border-slate-400" title="maternal" width={300} />
                            <img src={inf2} alt="imagen maternal" className="rounded-full border border-slate-400" title="maternal" width={300} />
                            <img src={inf3} alt="imagen maternal" className="rounded-full border border-slate-400" title="maternal" width={300} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
