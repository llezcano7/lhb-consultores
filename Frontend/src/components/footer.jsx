import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



import './footer.css'
export default function Footer() {
    return (
        <footer className='footer container'>
            <div className='media-icons'>
                <a href="https://www.linkedin.com/in/consultora-lhb-0234123b5/"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/lhb.consultora?utm_source=qr&igsh=emI3YXJudDV2aHZz"><FaInstagramSquare/></a>
            </div>
            <div className="footer-content">
            <p> © 2026 LHB consultores - Todos los derechos reservados.</p>
            <br />
            <p>Desarrollado por flexmedia</p>
            </div>
        </footer>
    )
}