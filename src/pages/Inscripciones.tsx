import foto1 from '../img/foto1.png'
import foto2 from '../img/foto2.png'
import foto3 from '../img/foto3.png'
import foto4 from '../img/foto4.png'

const Inscripciones = () => {
    return (
        <div className="text-center mb-20">
            {/* <div className="bg-blue-950 opacity-85 px-40 py-10 flex items-center justify-center border-y-2 border-red-400">
                <h1 className="text-5xl text-white font-mono">Inscripciones</h1>
            </div> */}
            <div className="h-32 shadow-2xl flex mb-20 justify-center items-center">
                <h1 className="text-5xl text-blue-900 font-mono">Inscripciones</h1>
            </div>
            <div className="flex gap-10 justify-center mt-10">
                <img src={foto1} alt="" className='rounded-3xl shadow-lg' width={250}/>
                <img src={foto2} alt="" className='rounded-3xl shadow-lg' width={250}/>
                <img src={foto3} alt="" className='rounded-3xl shadow-lg' width={250}/>
                <img src={foto4} alt="" className='rounded-3xl shadow-lg' width={250}/>
            </div>
            <div className="mt-20">
                <div className="h-28 shadow-2xl flex items-center justify-center">
                    <h1 className="text-4xl bg-zinc-100 px-10 py-3 rounded-full font-mono">Documentación</h1>
                </div>
                <div className="mx-auto w-2/3 mt-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis iure incidunt est dolor adipisci eius corporis, qui sequi aut ducimus dignissimos quasi! Commodi nisi expedita repellat ex, rerum recusandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci consequatur molestias, deleniti nobis amet nulla alias ullam quis dignissimos quidem ut cupiditate consectetur nisi veniam vitae dolores praesentium culpa.
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <div className="h-28 shadow-2xl flex items-center justify-center">
                    <h1 className="text-4xl  bg-zinc-100 px-10 py-3 rounded-full font-mono">Horarios de atención</h1>
                </div>
                <div className="mx-auto w-2/3 mt-10">
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis iure incidunt est dolor adipisci eius corporis, qui sequi aut ducimus dignissimos quasi! Commodi nisi expedita repellat ex, rerum recusandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci consequatur molestias, deleniti nobis amet nulla alias ullam quis dignissimos quidem ut cupiditate consectetur nisi veniam vitae dolores praesentium culpa.
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <div className="h-28 shadow-2xl flex items-center justify-center">
                    <h1 className="text-4xl  bg-zinc-100 px-10 py-3 rounded-full font-mono">Medios de pago</h1>
                </div>
                <div className="mx-auto w-2/3 mt-10">
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis iure incidunt est dolor adipisci eius corporis, qui sequi aut ducimus dignissimos quasi! Commodi nisi expedita repellat ex, rerum recusandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci consequatur molestias, deleniti nobis amet nulla alias ullam quis dignissimos quidem ut cupiditate consectetur nisi veniam vitae dolores praesentium culpa.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Inscripciones;
