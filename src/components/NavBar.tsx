import React, { useState, useEffect }  from "react"
import { Link, useLocation } from "react-router-dom"

export const NavBar: React.FC = () => {
    const [isNavbarFixed, setNavbarFixed] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setNavbarFixed(scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    }

    const isCurrentPage = (pathname: string) => {
        return location.pathname === pathname
    }

    const img = {
        backgroundImage: "url('../../img/jugando.jpg')",
        width: '100%',
        height: '70vh',
        backgroundSize: 'cover',
    };

    const imgLogo = {
        backgroundImage: "url('../../img/logo.png')",
        
    }

    return (
        <div>
            <div className={`bg-blue-950 z-50 flex flex-col md:flex-row justify-between items-center transition-all fixed w-screen pr-5 duration-300 ${isNavbarFixed ? 'w-screen h-16 transition-all duration-300 pr-5 bg-blue-950 shadow-lg' : 'h-24'}`}>
                <div onClick={scrollToTop} className="flex text-gray-50 cursor-pointer items-center">
                    <img className="mx-7 rounded-full bg-white transition-all duration-300" style={imgLogo}  width={isNavbarFixed ? '0' : '60'} alt="logo" title="logo" />
                    <h1 className={`cursor-pointer text-3xl Berkshire`}>mi pequeño mundo</h1>       
                </div>
                <div className="flex text-gray-50 align-middle items-center">
                    <div className={`border-r border-red-800 flex items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link onClick={scrollToTop} to='/'  className={`bg-none px-4 py-2 rounded-full font-mono transition-all duration-100 mx-5 cursor-pointer border border-solid hover:border-blue-800 border-blue-950 ${isCurrentPage('/') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Inicio</Link>
                    </div>
                    <div className={`border-r border-red-800 flex items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link to='/historia' className={`bg-none px-4 py-2 font-mono rounded-full transition-all duration-100 mx-5 cursor-pointer border hover:border-blue-800 border-solid border-blue-950 ${isCurrentPage('/historia') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Nuestra historia</Link>
                    </div>
                    <div className={`border-r border-red-800 flex items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link to='/inscripciones' className={`bg-none px-4 font-mono py-2 rounded-full transition-all duration-100 mx-5 cursor-pointer border hover:border-blue-800 border-solid border-blue-950 ${isCurrentPage('/inscripciones') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Inscripciones</Link>
                    </div>
                    <div className={`flex items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link to='/pago' className={`bg-none px-4 py-2 rounded-full font-mono transition-all duration-100 mx-5 cursor-pointer border hover:border-blue-800 border-solid border-blue-950 ${isCurrentPage('/pago') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Medios de pago</Link>
                    </div>
                </div>
            </div>
            <div style={img} className="bg-fixed"></div>
            {/* <div className="w-96 h-12 px-10 opacity-55 py-5 bg-zinc-200 absolute top-2/4 z-40 left-1/2 transform -translate-x-1/2">
            </div>
            <h1 className="text-5xl Berkshire text-blue-950 absolute top-2/4 z-40 left-1/2 transform -translate-x-1/2">Mi pequeño mundo</h1> */}
        </div>
    )
}