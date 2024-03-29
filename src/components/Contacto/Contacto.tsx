import envelope from '../../img/envelope-solid-24.png'
import phone from '../../img/phone-solid-24.png'
import ig from '../../img/instagram-alt-logo-24.png'
import arrow from '../../img/chevron-up-regular-36.png'
import copy from '../../img/copyright-regular-24.png'


export default function Contacto() {
    const desplazamiento = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });  
    } 

    return  (
        <div className="flex flex-col items-center mt-20 pb-5 rounded-t-full md:rounded-t-full shadow-2xl">
            <div className="md:px-20 px-10 py-1 bg-red-800 mt-20 rounded-full shadow-2xl">
                <h1 className="md:text-5xl text-3xl my-5 text-slate-300 font-mono">Contactanos</h1>
            </div>
            <div  className="my-20 grid md:grid-cols-2 md:gap-96 grid-cols-1 gap-20">
                <div>
                    <h2 className="text-3xl text-blue-700 mb-10 border-b border-blue-700 w-fit font-mono">Maternal</h2>
                    <div className="flex gap-3 border-b border-dashed border-slate-500 pb-4 md:pb-5">
                        <img src={envelope} alt="correo" />
                        <p className="text-lg hover:underline">mpmjardin@live.com</p>
                    </div>
                    <div className="flex gap-3 mt-4 border-b border-dashed border-slate-500 pb-4 md:pb-5">
                        <img src={phone} alt="telefono" />
                        <p className="text-lg hover:underline">4791-0812</p>
                    </div>
                    <div className="flex gap-3 mt-4 border-b border-dashed border-slate-500 pb-4 md:pb-5">
                        <img src={ig} alt="instagram" width={28}/>
                        <a href="https://www.instagram.com/jardin.mipequenomundo/" target="blank" className="cursor-pointer">
                            <p className="text-lg hover:underline">Jardin Mi Pequeño Mundo</p>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl text-red-700 mb-10 border-b border-red-700 w-fit font-mono">Infantes</h2>
                    <div className="flex gap-3 border-b border-dashed border-slate-500 pb-4 md:pb-5">
                        <img src={envelope} alt="correo" />
                        <p className="text-lg hover:underline">mpmjardin@live.com</p>
                    </div>
                    <div className="flex gap-3 mt-4 border-b border-dashed border-slate-500 pb-4 md:pb-5">
                        <img src={phone} alt="telefono" />
                        <p className="text-lg hover:underline">4795-4782</p>
                    </div>
                    <div className="flex gap-3 mt-4 border-b border-dashed border-slate-500 pb-4 md:pb-5">
                        <img src={ig} alt="instagram" width={28}/>
                        <a className="cursor-pointe" href="https://www.instagram.com/jardin.mipequenomundo/" target="blank">
                            <p className="text-lg hover:underline">Jardin Mi Pequeño Mundo</p>
                        </a>
                    </div>
                </div>
            </div>
            <div onClick={desplazamiento} className="flex flex-col justify-center items-center mt-10">
                <img className="cursor-pointer" src={arrow} alt="" />
                <p className="cursor-pointer px-4 py-1 rounded-xl border-2 border-solid border-blue-900 transition-all duration-200 hover:bg-blue-900 hover:text-white">Volver</p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-10 mb-0 ">
                <img src={copy} alt="copyright" title="copyright" />
                <p className="font-bold">Jardín maternal e infantes Mi Pequeño Mundo</p>
            </div>
        </div>
    )
}