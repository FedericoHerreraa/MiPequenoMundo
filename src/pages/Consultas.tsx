import { sendScoolEmailRequest } from '../api/mail'
import logo from '../img/logo.png'
import { useState } from 'react'

export default function Consultas() {
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
            
            await sendScoolEmailRequest(emailSend)
            
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
            <div className='flex justify-center'>
                <div className="md:mx-auto md:w-1/3 mx-3 flex flex-col items-center md:border-x md:border-x-red-600 mb-10">
                    <div className="mb-10 flex items-center gap-2">
                        <img src={logo} alt="" width={60}/>
                        <h1 className="md:text-3xl text-2xl">Jardín Mi Pequeño Mundo</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="flex flex-col mb-10 text-xl md:w-96 mx-10">
                            Nombre completo: 
                            <input 
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="escribe tu nombre y apellido aquí" 
                                className="px-5 py-2  rounded-xl  bg-blue-950 text-base text-white"
                            />
                        </label>
                        <label className="flex flex-col mb-10 text-xl md:w-96 mx-10">
                            Dirección de correo: 
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@servicio.com" 
                                className="px-5 py-2  rounded-xl  bg-blue-950 text-base text-white"
                            />
                        </label>
                        <label className="flex flex-col mb-10 text-xl md:w-96 mx-10 ">
                            Repetir dirección de correo:
                            <input 
                                type="email" 
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)}
                                placeholder="email2@servicio.com" 
                                className="px-5 py-2 rounded-xl bg-blue-950 text-base text-white"
                            />
                        </label>
                        <label className="flex flex-col mb-10 text-xl md:w-96 mx-10">
                            Mensaje:
                            <textarea 
                                placeholder="consulta"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                className="px-5 py-2  rounded-xl bg-blue-950 text-base text-white"
                            />
                        </label>
                        <div className='flex flex-col items-center'>
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
                                className="px-5 py-2 w-1/4 border border-solid border-red-500 flex justify-center rounded-md cursor-pointer text-black text-base transition-all duration-100 mb-10 hover:bg-red-800 hover:text-white"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
