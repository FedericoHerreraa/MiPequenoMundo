import React, { useState } from "react"
import { Link } from "react-router-dom"
import close from '../../img/right-arrow-alt-regular-24.png'

const SideNav: React.FC = () => {
    const [isOpen, setSideNav] = useState(true)

    const handleSideNav = () => setSideNav(!isOpen)

    return (
        <div className={`fixed inset-y-0 right-0 z-50 transition-transform transform duration-300 bg-gray-800 ${isOpen ? 'transition-all duration-300 w-64 translate-x-0' : 'transition-all duration-300 w-0'}`}>
            <div className="flex flex-col items-center mt-10">
                <div onClick={handleSideNav}>
                    <img src={close} alt="close" title="close" />
                </div>
                <div className="flex flex-col gap-4 mt-10">
                    <Link to='/' className="flex justify-center py-2 px-5 rounded-full border border-solid border-blue-950">
                        <p >Inicio</p>
                    </Link>
                    <Link to='/historia' className="flex justify-center py-2 px-5 rounded-full border border-solid border-blue-950">
                        <p >Nuestra Historia</p>
                    </Link>
                    <Link to='/inscripciones' className="flex justify-center py-2 px-5 rounded-full border border-solid border-blue-950">
                        <p>Inscripciones</p>
                    </Link>
                    <Link to='/consultas' className="flex justify-center py-2 px-5 rounded-full border border-solid border-blue-950">
                        <p>Consultanos</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNav;