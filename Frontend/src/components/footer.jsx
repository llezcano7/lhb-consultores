import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



import './footer.css'
export default function Footer() {
    return (
        <footer className='footer container'>
            <div className='media-icons'>
                <FaLinkedinIn />
                <FaInstagramSquare />
            </div>
            <div className="footer-content">
            <p> © 2026 LHB consultores - Todos los derechos reservados.</p>
            <br />
            <p>Desarrollado por flexmedia</p>
            </div>
        </footer>
    )
}