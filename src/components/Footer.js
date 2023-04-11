import React from "react"
import { Link } from "react-router-dom"
import soysociab from "../assets/img/soysociab.svg"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="d-flex justify-content-around align-items-center footer">
            <div>
                <Link to="/"><img src={soysociab}></img></Link>
            </div>
            <div className="enlaces">
                <Link to="/"><h6>Soporte</h6></Link>
                <Link to="/"><h6>Contáctanos</h6></Link>
                <Link to="/"><h6>Ser Socia</h6></Link>
            </div>
            <div className="iconos">
                    <h6>Redes Sociales</h6>
                    <Link to="/"><FaInstagram/></Link>
                    <Link to="/"><FaTwitter/></Link>
                    <Link to="/"><FaYoutube/></Link>
                    <Link to="/"><FaFacebook/></Link>
            </div>
        </div>
    )
}

export { Footer }