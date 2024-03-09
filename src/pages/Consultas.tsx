import logo from '../img/logo.png'

const Consultas = () => {
    return (
        <div>
            <div className="h-32 shadow-2xl mb-20 flex justify-center items-center">
                <h1 className="text-5xl text-blue-900 font-mono">Consultanos</h1>
            </div>
            <div className="mx-auto w-1/3 flex flex-col items-center border-x border-x-red-600 mb-10">
                <div className="mb-10 flex items-center gap-5">
                    <img src={logo} alt="" width={60}/>
                    <h1 className="text-3xl">Jardín Mi Pequeño Mundo</h1>
                </div>
                <form className=''>
                    <label className="flex flex-col mb-10 text-xl w-96">
                        Dirección de correo: 
                        <input 
                            type="email"
                            placeholder="ejemplo@gmail.com" 
                            className="px-5 py-2  rounded-xl  bg-blue-950 text-base text-white"
                        />
                    </label>
                    <label className="flex flex-col mb-10 text-xl w-96 ">
                        Repetir dirección de correo:
                        <input 
                            type="email" 
                            placeholder="ejemplo@gmail.com" 
                            className="px-5 py-3 rounded-xl bg-blue-950 text-base text-white"
                        />
                    </label>
                    <label className="flex flex-col mb-10 text-xl w-96">
                        Mensaje:
                        <textarea 
                            placeholder="consulta"
                            className="px-5 py-2  rounded-xl bg-blue-950 text-base text-white"
                        />
                    </label>
                    <div className='flex flex-col'>
                        <h1 className='text-xl'>¿De que jardín necesitas información?</h1>
                        <div className='flex justify-center gap-5'>
                            <label className='p-3'>
                                Maternal
                                <input 
                                    type="checkbox" 
                                    className='mx-2 cursor-pointer'
                                />
                            </label>
                            <label className='p-3'>
                                Infantes
                                <input 
                                    type="checkbox" 
                                    className='mx-2 cursor-pointer'
                                />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <input
                            type="submit"
                            value="Enviar"
                            className="px-5 py-2 w-1/4 border border-red-500 rounded-md cursor-pointer text-black text-base transition-all duration-100 mb-10 hover:bg-red-800 hover:text-white"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Consultas