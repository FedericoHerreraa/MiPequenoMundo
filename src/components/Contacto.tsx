import React from "react"


export const Contacto: React.FC = () => {
    const desplazamiento = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });  
    } 

    return  (
        <div className="flex flex-col items-center mt-20 pb-5 bg-zinc-300">
            <h1 className="text-5xl my-10 text-blue-900">Contactanos</h1>
            <div  className="my-10 grid grid-cols-2 gap-96">
                <div>
                    <h2 className="text-3xl text-blue-700 mb-10 border-b border-blue-700 w-fit">Maternal:</h2>
                    <div className="flex gap-3">
                        <img src="src/img/envelope-solid-24.png" alt="correo" />
                        <p className="text-lg">Direccion de correo</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <img src="src/img/phone-solid-24.png" alt="telefono" />
                        <p className="text-lg">telefono</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <img src="src/img/instagram-alt-logo-24.png" alt="instagram" width={28}/>
                        <a href="https://www.instagram.com/jardin.mipequenomundo/" target="blank" className="cursor-pointer">
                            <p className="text-lg">Jardin Mi Pequeño Mundo</p>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl text-red-700 mb-10 border-b border-red-700 w-fit">Infantes:</h2>
                    <div className="flex gap-3">
                        <img src="src/img/envelope-solid-24.png" alt="correo" />
                        <p className="text-lg">Direccion de correo</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <img src="src/img/phone-solid-24.png" alt="telefono" />
                        <p className="text-lg">telefono</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <img src="src/img/instagram-alt-logo-24.png" alt="instagram" width={28}/>
                        <a className="cursor-pointe" href="https://www.instagram.com/jardin.mipequenomundo/" target="blank">
                            <p className="text-lg">Jardin Mi Pequeño Mundo</p>
                        </a>
                    </div>
                </div>
            </div>
            <div onClick={desplazamiento} className="flex flex-col justify-center items-center mt-20">
                <img className="cursor-pointer" src="src/img/chevron-up-regular-36.png" alt="" />
                <p className="cursor-pointer px-4 py-1 rounded-xl border-2 border-solid border-blue-900">Subir</p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-20 mb-0 ">
                <img src="src/img/copyright-regular-24.png" alt="copyright" title="copyright" />
                <p className="font-bold">Jardin maternal e infantes Mi Pequeño Mundo</p>
            </div>
        </div>
    )
}