import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";




export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <div className='top-header container'>
                <div className='media-icons-header'>
                <a href=""><FaLinkedinIn className='linkedin-icon' /></a>
                <a href=""><FaInstagramSquare className='instagram-icon'/></a>
                </div>
                <div className='header-icons'>
                <p> <FaSquareEnvelope className='email-icon' />contacto@lhb.com</p>
                <p> <FaSquarePhone className='phone-icon' />+54 9 1169094236</p>
                </div>
            </div>
            <header className='header-container container'>
                <Link to="/"> <img className='logo' src="/LHB-logo.png" alt="logo principal de LHB Consultores" /></Link>
                    <nav className={`navigator ${isOpen ? "open" : ""}`}>

                    <Link to="/"  onClick={closeMenu}>Inicio</Link>
                    <Link to="/nosotros" onClick={closeMenu}>Nosotros</Link>
                    <Link to="/servicios" onClick={closeMenu}>Servicios</Link>
                    <Link to="/blog" onClick={closeMenu}>Blog</Link>
                    <Link to="/metodologia" onClick={closeMenu}>Metodología</Link>
                    <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
                </nav>
                <button className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>
            </header>
        </>
    )
}