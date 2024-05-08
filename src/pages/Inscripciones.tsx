import foto1 from '../img/foto1.png'
import foto2 from '../img/foto2.png'
import foto3 from '../img/foto3.png'
import foto4 from '../img/foto4.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function Inscripciones() {
    const esMobile = () => window.innerWidth < 768;

    return (
        <div className="text-center mb-20">
            <div className="h-32 shadow-2xl flex mb-20 justify-center items-center">
                <h1 className="text-5xl text-blue-900 font-mono">Inscripciones</h1>
            </div>
            {
                esMobile() ? (
                    <Carousel className="h-72 pt-3">
                        <Carousel.Item>
                            <img
                                className="d-block w-100  h-80"
                                src={foto1}
                                alt="Primera imagen"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100  h-80"
                                src={foto2}
                                alt="Segunda imagen"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100  h-80"
                                src={foto3}
                                alt="Tercera imagen"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100  h-80"
                                src={foto4}
                                alt="Tercera imagen"
                            />
                        </Carousel.Item>
                    </Carousel>
                ) : (
                    <div className="flex gap-10 justify-center mt-10">
                        <img src={foto1} alt="" className='rounded-3xl shadow-lg' width={250} />
                        <img src={foto2} alt="" className='rounded-3xl shadow-lg' width={250} />
                        <img src={foto3} alt="" className='rounded-3xl shadow-lg' width={250} />
                        <img src={foto4} alt="" className='rounded-3xl shadow-lg' width={250} />
                    </div>
                )
            }
            <div className="mt-20">
                <div className="h-28 shadow-2xl flex items-center justify-center">
                    <h1 className="text-4xl bg-zinc-100 px-10 py-3 rounded-full font-mono">Documentación</h1>
                </div>
                <div className='flex justify-center'>
                    <div className="md:mx-auto md:w-2/3 mx-3 mt-10">
                        <p>
                            ¡Estamos encantados de darle la bienvenida a nuestro jardín de infantes y maternal! Para completar el proceso de inscripción de su hijo, le pedimos que por favor traiga la siguiente documentación:
                            - Certificado de nacimiento del niño.
                            - Fotocopia del DNI del niño y de los padres o tutores.
                            - Carnet de vacunación al día.
                            - Informe médico reciente que indique alergias, condiciones médicas o medicamentos que debamos conocer.
                            - Contacto de emergencia y autorización para tratamiento médico.
                            Nuestro equipo está aquí para ayudarlo en cada paso del proceso de inscripción. Por favor, no dude en comunicarse con nosotros si tiene alguna pregunta o necesita más información.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="h-28 shadow-2xl flex items-center justify-center">
                    <h1 className="text-4xl  bg-zinc-100 px-10 md:py-3 py-1 rounded-full font-mono">Horarios de atención</h1>
                </div>
                <div className='flex justify-center'>
                    <div className="md:mx-auto md:w-2/3 mx-3 mt-10">
                        <p className="">
                            En nuestro jardín de infantes y maternal, nos esforzamos por brindar un entorno acogedor y seguro para sus hijos. Nuestros horarios de atención son los siguientes:
                            <br />
                            - Lunes a Viernes: De 8:00 a.m. a 5:00 p.m. 
                            <br />
                            - Sábados y Domingos: Cerrado
                            <br />
                            Ofrecemos una amplia variedad de actividades educativas y recreativas durante el horario escolar, así como opciones de cuidado extendido antes y después de la escuela para adaptarnos a las necesidades de su familia.

                            Para más detalles sobre nuestras actividades y programas, no dude en ponerse en contacto con nosotros.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="h-28 shadow-2xl flex items-center justify-center">
                    <h1 className="text-4xl  bg-zinc-100 px-10 py-3 rounded-full font-mono">Medios de pago</h1>
                </div>
                <div className='flex justify-center'>
                    <div className="md:mx-auto md:w-2/3 mx-3 mt-10">
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis iure incidunt est dolor adipisci eius corporis, qui sequi aut ducimus dignissimos quasi! Commodi nisi expedita repellat ex, rerum recusandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci consequatur molestias, deleniti nobis amet nulla alias ullam quis dignissimos quidem ut cupiditate consectetur nisi veniam vitae dolores praesentium culpa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
