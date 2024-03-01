import React from "react"


export const Location: React.FC = () => {
    return  (
        <div className="flex flex-col items-center border-t border-slate-400 mx-40 mt-20">
            <h1 className="text-5xl my-10 text-blue-900 ">¿Donde estamos?</h1>
            <div  className="m-20">
                <div className="flex items-center gap-3">
                    <img src="src/img/map-solid-24.png" alt="" />
                    <p className="text-lg text-blue-900 py-3 font-medium"><strong>Jardin maternal:</strong> 25 de Mayo 525 Vicente Lopez</p>
                </div>
                <div className="shadow-lg">
                    <a  target="blank" href="https://www.google.com.ar/maps/place/Mi+Pequeño+Mundo/@-34.5320378,-58.4766428,16z/data=!4m9!1m2!2m1!1s25+de+mayo+525!3m5!1s0x95bcb6b054da23c7:0x7d65faef5b71bad2!8m2!3d-34.5326229!4d-58.4769553!16s%2Fg%2F1hc4g3x1w!5m1!1e4?entry=ttu">
                        <img src="/src/img/jardin maternal.png" alt="Jardin maternal" title="Mapa" width={1220} height={600} />
                    </a>
                </div>
            </div>
            <div className="m-20">
                <div className="flex items-center gap-3">
                    <img src="src/img/map-solid-24.png" alt="" />
                    <p className="text-lg text-red-800 py-3 font-medium"><strong>Jardin infante:</strong> Tomas Edison 492 Vicente Lopez</p>
                </div>
                <div className="shadow-lg">
                    <a target="blank" href="https://www.google.com.ar/maps/place/Mi+Pequeño+Mundo/@-34.5334669,-58.4774399,16z/data=!4m10!1m2!2m1!1stomas+edison+492+vicente+lopez!3m6!1s0x95bcb6b0fa085b2f:0xdd4188f263b18ee9!8m2!3d-34.5334115!4d-58.4776778!15sCh50b21hcyBlZGlzb24gNDkyIHZpY2VudGUgbG9wZXqSAQxraW5kZXJnYXJ0ZW7gAQA!16s%2Fg%2F11flt2x7lk!5m1!1e4?entry=ttu">
                        <img src="/src/img/jardin infante.png" alt="Jardin infante" title="Mapa" width={1220} height={600} />
                    </a>
                </div>
            </div>
        </div>
    )
}