import React from "react"
import mapSolid from '../../img/map-solid-24.png'
import jardinMat from '../../img/jardin maternal.png'
import ft1 from '../../img/ft1.png'
import ft2 from '../../img/ft2.png'
import ft3 from '../../img/ft3.png'
import ft4 from '../../img/ft4.png'
import jardinInf from '../../img/jardin infante.png'


export const Location: React.FC = () => {
    return  (
        <>
            <div className="flex flex-col items-center border-t border-red-500 mx-10 mt-40">
                <h1 className="text-6xl my-10 text-blue-900 font-mono">¿Donde estamos?</h1>
                <div  className="m-20">
                    <div className="flex items-center gap-3">
                        <img src={mapSolid} alt="" />
                        <p className="text-lg text-blue-900 py-3 font-medium"><strong>Jardin maternal:</strong> 25 de Mayo 525 Vicente Lopez</p>
                    </div>
                    <div className="shadow-lg border-y border-solid border-y-blue-500 rounded-3xl">
                        <a  target="blank" href="https://www.google.com.ar/maps/place/Mi+Pequeño+Mundo/@-34.5320378,-58.4766428,16z/data=!4m9!1m2!2m1!1s25+de+mayo+525!3m5!1s0x95bcb6b054da23c7:0x7d65faef5b71bad2!8m2!3d-34.5326229!4d-58.4769553!16s%2Fg%2F1hc4g3x1w!5m1!1e4?entry=ttu">
                            <img src={jardinMat} alt="Jardin maternal" title="Mapa" className="rounded-3xl" width={1220} height={600} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 mt-10 justify-center shadow-2xl py-5 h-72">
                <img src={ft1} alt="imagen infantes" className="rounded-3xl shadow-lg" title="infantes" width={250}/>
                <img src={ft2}  alt="imagen infantes" className="rounded-3xl shadow-lg" title="infantes" width={250}/>
                <img src={ft3} alt="imagen infantes" className="rounded-3xl shadow-lg" title="infantes" width={250}/>
                <img src={ft4} alt="imagen infantes" className="rounded-3xl shadow-lg" title="infantes" width={250}/>
            </div>
            <div className="flex flex-col items-center mx-10 mt-20">
                <div className="m-20">
                    <div className="flex items-center gap-3">
                        <img src={mapSolid} alt="" />
                        <p className="text-lg text-red-800 py-3 font-medium"><strong>Jardin infante:</strong> Tomas Edison 492 Vicente Lopez</p>
                    </div>
                    <div className="shadow-lg border-y border-solid border-y-red-500 rounded-3xl">
                        <a target="blank" href="https://www.google.com.ar/maps/place/Mi+Pequeño+Mundo/@-34.5334669,-58.4774399,16z/data=!4m10!1m2!2m1!1stomas+edison+492+vicente+lopez!3m6!1s0x95bcb6b0fa085b2f:0xdd4188f263b18ee9!8m2!3d-34.5334115!4d-58.4776778!15sCh50b21hcyBlZGlzb24gNDkyIHZpY2VudGUgbG9wZXqSAQxraW5kZXJnYXJ0ZW7gAQA!16s%2Fg%2F11flt2x7lk!5m1!1e4?entry=ttu">
                            <img src={jardinInf} alt="Jardin infante" title="Mapa" className="rounded-3xl" width={1220} height={600} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}