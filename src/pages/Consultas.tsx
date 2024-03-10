import logo from '../img/logo.png'
import { useState } from 'react'

const Consultas = () => {
    const [nombre, setNombre] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [email2, setEmail2] = useState<string>('')
    const [mensaje, setMensaje] = useState<string>('')
    const [opcion, setOpcion] = useState<string[]>([])
    const [error, setError] = useState<string>('')

    const confirmMail = (): boolean => {
        let emailConfirm = false
        if (email === email2) {
            emailConfirm = true
        } else {
            emailConfirm = false
        }
        return emailConfirm;
    }

    const handleOption = (option: string) => {
        setOpcion((prevOption) => 
            prevOption.includes(option)
                ? prevOption.filter((item) => item !== option)
                : [...prevOption, option]
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const mailValidation = confirmMail()
        
        if (!mailValidation) {
            setError('Las dos direcciones de correo no coinciden')
        } else {
            const emailSend = {
                email: email,
                nombre: nombre,
                mensaje: mensaje,
                opcion: opcion
            }
            console.log(emailSend)
    
            setEmail('')
            setEmail2('')
            setNombre('')
            setMensaje('')
            setOpcion([])
        }
    }

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
                <form onSubmit={handleSubmit}>
                    <label className="flex flex-col mb-10 text-xl w-96">
                        Nombre completo: 
                        <input 
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="escribe tu nombre y apellido aquí" 
                            className="px-5 py-2  rounded-xl  bg-blue-950 text-base text-white"
                        />
                    </label>
                    <label className="flex flex-col mb-10 text-xl w-96">
                        Dirección de correo: 
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ejemplo@gmail.com" 
                            className="px-5 py-2  rounded-xl  bg-blue-950 text-base text-white"
                        />
                    </label>
                    <label className="flex flex-col mb-10 text-xl w-96 ">
                        Repetir dirección de correo:
                        <input 
                            type="email" 
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                            placeholder="ejemplo@gmail.com" 
                            className="px-5 py-3 rounded-xl bg-blue-950 text-base text-white"
                        />
                    </label>
                    <label className="flex flex-col mb-10 text-xl w-96">
                        Mensaje:
                        <textarea 
                            placeholder="consulta"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
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
                                    checked={opcion.includes('Maternal')}
                                    onChange={() => handleOption('Maternal')}
                                    className='mx-2 cursor-pointer'
                                />
                            </label>
                            <label className='p-3'>
                                Infantes
                                <input 
                                    type="checkbox" 
                                    checked={opcion.includes('Infantes')}
                                    onChange={() => handleOption('Infantes')}
                                    className='mx-2 cursor-pointer'
                                />
                            </label>
                        </div>
                    </div>
                    {error ? (
                        <div className='flex justify-center my-5 font-serif'>
                            <p className="text-red-500 text-base">
                                {error}
                            </p>
                        </div>
                    ) : ('')
                    }
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
