import React from "react"
import { AiFillHeart, AiFillStar } from "react-icons/ai"
import { BiCommentAdd } from "react-icons/bi"
import { Link } from "react-router-dom"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const Forum = () => {
    return (
        <div className="bodyForum">
            <div class="titlePage">
                <h2>Bienvenida al Foro</h2>
            </div>
            <div className="row m-3 ">
                <div className="col">
                    <label for="nombreInput" className="form-label">Titulo<span className="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese titulo del Foro"
                        id="nombreInput"
                        required
                    />
                </div>
                <div className="col">
                    <label for="nombreInput" className="form-label">Autor<span className="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese su nombre"
                        id="nombreInput"
                        required
                    />
                </div>
                <div className="col">
                    <label for="nombreInput" className="form-label">Rol<span className="text-danger">*</span></label>
                    <select name="" id="" className="form-select" required>
                        <option value="">Escoge uno </option>
                        <option value="">Colaboradora </option>
                        <option value="1">Socia</option>
                    </select>
                </div>
                <div className="col">
                    <label for="nombreInput" className="form-label">Tema<span className="text-danger">*</span></label>
                    <select name="" id="" className="form-select" required>
                        <option value="">Escoge uno </option>
                        <option value="1">Tecnología</option>
                        <option value="2">Artesanía</option>
                        <option value="3">Servicios del hogar</option>
                        <option value="4">Servicios de mantención</option>
                        <option value="5">Servicios de alimentación</option>
                        <option value="6">Contabilidad</option>
                        <option value="7">Finanzas</option>
                        <option value="8">Administración</option>
                        <option value="9">Aprender publicidad</option>
                        <option value="10">Construcción</option>
                        <option value="11">Turismo</option>
                        <option value="12">Psicología</option>
                        <option value="13">Calidad de vida</option>
                        <option value="14">Usar mejor mi tiempo</option>
                        <option value="15">Usar mejor el computador</option>
                        <option value="16">Usar mejor el correo</option>
                        <option value="17">Usar mejor redes sociales</option>
                        <option value="18">Aprender publicidad</option>
                        <option value="19">Postulación a fondos</option>
                        <option value="20">Formalización de negocios</option>
                        <option value="21">Como tener más clientes</option>
                        <option value="22">Como fijar precios</option>
                        <option value="23">Reciclaje</option>
                        <option value="24">Manualidades</option>
                        <option value="25">Administrar el dinero</option>
                        <option value="26">Administrar el tiempo</option>
                    </select>
                </div>
            </div>
            <div className="row m-4">
                <textarea
                    className="form-control"
                    name=""
                    placeholder="Contenido "
                    id=""
                    cols="30"
                    rows="6"
                    required
                ></textarea>
            </div>
            <div className="col m-4 buttonEnviar">
                <button id="submitBtn" className="col-12 btn btn-secondary" type="submit">
                    Crear nuevo Foro
                </button>
            </div>
            <div className="containerForum">
                <div className="forumPpal">
                    <div className="col-9 forumContenido">
                        <h3>Ofrezco asesorías básicas de Contabilidad para tu negocio, Pregúntame!</h3>
                        <h6>Contabilidad</h6>
                        <p>Inicio de Actividades, Declaracion de impuestos, Cuaderno de contabilidad, etc.</p>
                        <div className="starForum">
                            <Stack spacing={1}>
                                <Rating name="size-medium" defaultValue={2} />
                            </Stack>
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/fS5C0nv/5.png" alt="" />
                        <h6>Autora:<br></br>Javiera Gonzales</h6>
                        <div className="iconsForum">
                            <Link to="/" className="heart" button=""><AiFillHeart /></Link>
                            <Link to="/" button=""><BiCommentAdd /></Link>
                        </div>
                    </div>
                </div>
                <div className="forumPpal">
                    <div className="col-9 forumContenido">
                        <h3>Quieres aumentar tus vistas, y asi ganar mas clientes, Pregúntame como!</h3>
                        <h6>Redes Sociales</h6>
                        <p>Inicio de Actividades, Declaracion de impuestos, Cuaderno de contabilidad, etc.</p>
                        <div className="starForum">
                            <Stack spacing={1}>
                                <Rating name="size-medium" defaultValue={2} />
                            </Stack>
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/JQvx9Fd/7.png" alt="" />
                        <h6>Autora:<br></br>Catalina Lin</h6>
                        <div className="iconsForum">
                            <Link to="/" className="heart" button=""><AiFillHeart /></Link>
                            <Link to="/" button=""><BiCommentAdd /></Link>
                        </div>
                    </div>
                </div>
                <div className="forumPpal">
                    <div className="col-9 forumContenido">
                        <h3>Que tal si te ayudo a hacer un catálogo ordenado de productos!</h3>
                        <h6>Diseño</h6>
                        <p>Inicio de Actividades, Declaracion de impuestos, Cuaderno de contabilidad, etc.</p>
                        <div className="starForum">
                            <Stack spacing={1}>
                                <Rating name="size-medium" defaultValue={2} />
                            </Stack>
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/nwJX4Gj/2.png" alt="" />
                        <h6>Autora:<br></br> Alisa Rivas</h6>
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
                            <Stack spacing={1}>
                                <Rating name="size-medium" defaultValue={2} />
                            </Stack>
                        </div>
                    </div>
                    <div className="col-3 fountForum">
                        <img src="https://i.ibb.co/r4bRMYm/8.png" alt="" />
                        <h6>Autora:<br></br>Antonia Yang</h6>
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