import React from "react"
import { AiFillHeart, AiFillStar } from "react-icons/ai"
import { BiCommentAdd } from "react-icons/bi"
import { Link } from "react-router-dom"

const Forum = () => {
    return (
        <div>
            <div class="titlePage2">
                <h2>Bienvenida al Foro</h2>
            </div>
            <div className="containerForum">
                <div className="forumPpal">
                    <div className="col-9 forumContenido">
                        <h3>Ofrezco asesorias basicas de Contabilidad para tu negocio, Preguntame!</h3>
                        <h6>Contabilidad</h6>
                        <p>Inicio de Actividades, Declaracion de impuestos, Cuaderno de contabilidad, etc.</p>
                        <div className="starForum">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/fS5C0nv/5.png" alt="" />
                        <h6>Autora:<br></br> Alisa Rivas</h6>
                        <div className="iconsForum">
                            <Link to="/" className="heart" button=""><AiFillHeart /></Link>
                            <Link to="/" button=""><BiCommentAdd /></Link>
                        </div>
                    </div>
                </div>
                <div className="forumPpal">
                    <div className="col-9 forumContenido">
                        <h3>Quieres aumentar tus vistas, y asi ganar mas clientes, Preguntame como!</h3>
                        <h6>Redes Sociales</h6>
                        <p>Inicio de Actividades, Declaracion de impuestos, Cuaderno de contabilidad, etc.</p>
                        <div className="starForum">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/JQvx9Fd/7.png" alt="" />
                        <h6>Autora:<br></br> Catalina Lin</h6>
                        <div className="iconsForum">
                            <Link to="/" className="heart" button=""><AiFillHeart /></Link>
                            <Link to="/" button=""><BiCommentAdd /></Link>
                        </div>
                    </div>
                </div>
                <div className="forumPpal">
                    <div className="col-9 forumContenido">
                        <h3>Que tal si te ayudo a hacer un catalogo ordenado de productos!</h3>
                        <h6>Diseño</h6>
                        <p>Inicio de Actividades, Declaracion de impuestos, Cuaderno de contabilidad, etc.</p>
                        <div className="starForum">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/nwJX4Gj/2.png" alt="" />
                        <h6>Autora:<br></br> Javiera Gonzales</h6>
                        <div className="iconsForum">
                            <Link to="/" className="heart" button=""><AiFillHeart /></Link>
                            <Link to="/" button=""><BiCommentAdd /></Link>
                        </div>
                    </div>
                </div>
                <div className="forumPpal">
                    <div className="col-9 forumContenido">
                        <h3>Busco aliadas para realizar mis compras y asi poder ahorrar, contáctame!</h3>
                        <h6>Conexión</h6>
                        <p>Inicio de Actividades, Declaracion de impuestos, Cuaderno de contabilidad, etc.</p>
                        <div className="starForum">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/r4bRMYm/8.png" alt="" />
                        <h6>Autora:<br></br> Miranda Torres</h6>
                        <div className="iconsForum">
                            <Link to="/" className="heart" button=""><AiFillHeart /></Link>
                            <Link to="/" button=""><BiCommentAdd /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Forum }