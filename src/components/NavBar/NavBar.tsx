import React, { useState, useEffect }  from "react"
import { Link, useLocation } from "react-router-dom"
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'
import menuItem from '../../img/menu-regular-24.png'
import SideNav from "../SideNav/SideNav"

export const NavBar: React.FC = () => {
    const [isNavbarFixed, setNavbarFixed] = useState(false);
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    
    const handleSideNav = () => setSideNavOpen(!isSideNavOpen)

    const isMobile = () => window.innerWidth <= 768;

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

    const isCurrentPage = (pathname: string) => location.pathname === pathname

    return (
        <div>
            <div className={`bg-blue-950 z-50 flex justify-between items-center transition-all fixed w-screen pr-5 duration-300 ${isNavbarFixed ? 'w-screen h-16 transition-all duration-300 pr-5 bg-blue-950 shadow-lg' : 'h-24'}`}>
                <div onClick={scrollToTop} className="flex text-gray-50 cursor-pointer items-center">
                    <div className="md:mx-7">
                        <img src={logo} className={` mx-2 rounded-full bg-white transition-all duration-300`} width={isNavbarFixed ? '0' : '60'} alt="logo" title="logo" />
                    </div>
                    <h1 className={`cursor-pointer text-3xl Berkshire`}>mi pequeño mundo</h1>       
                </div>
                <div className="flex text-gray-50 align-middle items-center">
                    <div className="md:hidden block cursor-pointer" onClick={handleSideNav}>
                        <img src={menuItem} alt="" />
                        {isSideNavOpen ? (
                                <SideNav/>
                            ) : ''
                        }
                    </div>  
                    <div className={`md:flex hidden border-r-2 border-red-800  items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link onClick={scrollToTop} to='/'  className={`bg-none px-4 py-2 rounded-full font-mono transition-all duration-100 mx-5 cursor-pointer  ${isCurrentPage('/') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Inicio</Link>
                    </div>
                    <div className={`md:flex hidden border-r-2 border-red-800  items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link to='/historia' className={`bg-none px-4 py-2 font-mono rounded-full transition-all duration-100 mx-5 cursor-pointer  ${isCurrentPage('/historia') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Nuestra historia</Link>
                    </div>
                    <div className={`md:flex hidden border-r-2 border-red-800  items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link to='/inscripciones' className={`bg-none px-4 font-mono py-2 rounded-full transition-all duration-100 mx-5 cursor-pointer  ${isCurrentPage('/inscripciones') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Inscripciones</Link>
                    </div>
                    <div className={`md:flex hidden  items-center ${isNavbarFixed ? 'h-10' : 'h-14'}`}>
                        <Link to='/consultas' className={`bg-none px-4 py-2 rounded-full font-mono transition-all duration-100 mx-5 cursor-pointer  ${isCurrentPage('/pago') ? 'bg-blue-800' : ''} ${isNavbarFixed ? 'text-sm' : 'text-md'}`}>Consultanos</Link>
                    </div>
                </div>
            </div>
            <div className={`${isMobile() ? `${styles.imgMobBanner}` : `${styles.imgBanner}`}  bg-fixed`}></div>
            {/* <div className="w-96 h-12 px-10 opacity-55 py-5 bg-zinc-200 absolute top-2/4 z-40 left-1/2 transform -translate-x-1/2">
            </div>
            <h1 className="text-5xl Berkshire text-blue-950 absolute top-2/4 z-40 left-1/2 transform -translate-x-1/2">Mi pequeño mundo</h1> */}
        </div>
    )
}