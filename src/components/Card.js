import React from "react";
import { AiOutlineMessage } from 'react-icons/ai';
import { Link } from "react-router-dom";

//aqui va trabajar jp 
const CardNews = () => {
    return (
        <div>
            <div class="titlePage">
                <h2>Noticias</h2>
            </div>
            <div class="newscontainer d-flex justify-content-center">
                <div class="newscard">
                    <img src="https://www.bbva.com/wp-content/uploads/2021/07/BBVA-Emprendimiento_en_femenino-APERTURA.jpg" />
                    <div class="card-body">
                        <h5 class="newscard-title">Cursos SENCE y Municipalidades</h5>
                        <p class="newscard-text">Entérate de los cursos presenciales que ofrecerá SENCE en conjunto con varias municipalidades, entregando conocimientos para el emprendimiento ¡y además un bono por asistencial al curso!.</p>
                        <div className="col-md-12 mt-2 buttonEnviarNews">
                            <Link to="https://www.latercera.com/servicios/noticia/revisa-los-cursos-gratuitos-para-emprendedores-del-sence/DJ7N5FRCHZAH5NV7JWOTLA3PRY/"><button id="submitBtn" className="col-10 btn btn-secondary" type="submit">
                                Leer más
                            </button></Link>
                        </div>
                    </div>
                </div>
                <div class="newscard">
                    <img src="https://www.rutadigital.cl/media/images/gestion.original.jpg" />
                    <div class="card-body">
                        <h5 class="newscard-title">Nuevo curso "Gestión y Colaboración" de RutaDigital y Sercotec"</h5>
                        <p class="newscard-text">¿Te falta tiempo? O te gustaria tener más herramientas que ter permitan organizarte mejor… ingresa al siguiente link y descubriras como!

                        </p>
                        <div className="col-md-12 mt-2 buttonEnviarNews">
                            <Link to="https://www.rutadigital.cl/gestion-y-colaboracion">
                                <button id="submitBtn" className="col-10 btn btn-secondary" type="submit">
                                    Leer más
                                </button></Link>
                        </div>
                    </div>
                </div>
                <div class="newscard">
                    <img src="https://www.latercera.com/resizer/3oF7CIO_6rmsTwnEeGpYuvyvzP0=/900x600/filters:focal(1278x1492:1288x1482)/cloudfront-us-east-1.images.arcpublishing.com/copesa/YJ4WWUOSYJGVRGFGN4JZTTV7AY.jpg" />
                    <div class="card-body">
                        <h5 class="newscard-title">Mujeres que inspiran: </h5>
                        <p class="newscard-text">Yeanice Vásquez Pino, Exitosa cientifica y emprendedora chilena…. Descubre mas de ella en el siguiente link:</p>
                        <div className="col-md-12 mt-2 buttonEnviarNews">
                            <Link to="https://www.latercera.com/que-pasa/noticia/la-cientifica-chilena-que-lucha-contra-el-cambio-climatico-utilizando-inteligencia-artificial/4GZFAXR3UREOLP3WLCAUQ65PJ4/">
                                <button id="submitBtn" className="col-10 btn btn-secondary" type="submit">
                                    Leer más
                                </button></Link>
                        </div>
                    </div>
                </div>
                <div class="newscard">
                    <img src="https://www.sercotec.cl/wp-content/uploads/2023/02/web_grafica.jpeg" />
                    <div class="card-body">
                        <h5 class="newscard-title">¡Fondos para emprendimientos!</h5>
                        <p class="newscard-text">Informate sobre las fechas y los fondos que ofrece el estado, ¡es una gran oportunidad para crecer!.</p>
                        <div className="col-md-12 mt-2 buttonEnviarNews">
                            <Link to="https://www.sercotec.cl/sercotec-anuncia-su-calendario-de-convocatorias-2023">
                                <button id="submitBtn" className="col-10 btn btn-secondary" type="submit">
                                    Leer más
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="newscard">
                    <img src="https://www.crecemujer.cl/sites/default/files/styles/medium/public/captura_de_pantalla_2023-03-22_164832.jpg?itok=IS6TBJcf" />
                    <div class="card-body">
                        <h5 class="newscard-title">Mujeres exponentes en el emprendimiento</h5>
                        <p class="newscard-text">Banco Estado junto con el ministerio de la mujer ofrecen una ronda de charlas sobre el empoderamiento económico de las mujeres, no te las pierdas!.</p>
                        <div className="col-md-12 mt-2 buttonEnviarNews">
                            <Link to="https://www.crecemujer.cl/noticia/dimos-inicio-al-ciclo-mejorando-mis-competencias">
                                <button id="submitBtn" className="col-10 btn btn-secondary" type="submit">
                                    Leer más
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="newscard">
                    <img src="https://static.emol.cl/emol50/Fotos/2023/03/08/file_20230308154126.jpeg" />
                    <div class="card-body">
                        <h5 class="newscard-title">Mas mujeres liderando</h5>
                        <p class="newscard-text">Durante los últimos 3 años el número de empresas lideradas por mujeres ha crecido un 35! ¿será suficiente? entérate de más en el siguiente link:</p>
                        <div className="col-md-12 mt-2 buttonEnviarNews">
                            <Link to="https://www.emol.com/noticias/Economia/2023/03/08/1088752/rol-femenino-en-ecosistema-emprendedor.html">
                                <button id="submitBtn" className="col-10 btn btn-secondary" type="submit">
                                    Leer más
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

//aqui va trabajar gissele

const CardAbility = () => {
    return (
        <div>
            <div class="titlePage">
                <h2>Habilidades</h2>
            </div>
            <div className="container-card">
                <div className="card">
                    <figure>
                        <img src="https://scout.es/wp-content/uploads/2021/11/IMAGEN-MUJER-EMPRENDEDORA-01.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>¿Cómo ser  una mujer líder?</h3>
                        <p>Algunas de las competencias que tienen las mujeres líderes y que han funcionado con éxito para lograrlo.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://img.freepik.com/vector-premium/ilustracion-analisis-ideas-negocios_662093-52.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Desarrollar un emprendimiento exitoso</h3>
                        <p>Considera los siguientes consejos antes de iniciar un negocio, para emprender con éxito.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://stemwomen.eu/wp-content/uploads/2020/03/43722.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>El emprendimiento femenino</h3>
                        <p>Te presentamos las claves esenciales del emprendimiento femenino para hacerlo de manera exitosa, superando los obstáculos en tu trayectoria como emprendedora.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://www.enter.co/wp-content/uploads/2021/03/4890375.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Conocimientos claves para una emprendedora</h3>
                        <p>Aprende los conceptos claves para sacar el máximo beneficio posible a tu emprendimiento.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://img.freepik.com/vector-gratis/mujer-negocios-multitarea-diseno-plano_52683-55449.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Conoce las etapas del emprendimiento</h3>
                        <p>Aquí aprenderás las etapas para emprender y llevar tu emprendimiento a otro nivel.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://www.larepublica.net/storage/images/2019/11/29/20191129154529.mujeres-empresarias.x2.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>La importancia de aprender a comunicarnos efectivamente</h3>
                        <p>Descubre aquí las claves fundamentales para mejorar.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://img.freepik.com/vector-gratis/mujer-negocios-multitarea-dibujada-mano_23-2148819785.jpg?w=360" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Lograr una mejor calidad de vida</h3>
                        <p>Te traemos el top 7 de los mejores consejos para lograr tu desarrollo personal.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://emprendedoresnews.com/wp-content/uploads/2022/02/mujeres-emprendedoras.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>¿Cómo elegir al equipo de trabajo adecuado?</h3>
                        <p>Habilidades y capacidades que deben tener esas personas para que realicen las tareas asignadas lo mejor posible.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
const CardTool = () => {
    return (
        <div>
            <div class="titlePage">
                <h2>Herramientas</h2>
            </div>
            <div className="container-card">
                <div className="card">
                    <figure>
                        <img src="https://cdn.diariojornada.com.ar/imagenes/2022/10/16/335444_212652.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>¿Cuáles son los programas que impulsan al emprendimiento femenino?</h3>
                        <p>Te presentamos los programas a los que puedes postular.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://www.mipymes.gov.py/wp-content/uploads/2022/08/FINANCIAMIENTO.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Contabilidad para emprendedoras. Fácil de aplicar</h3>
                        <p>Aprende los conceptos básicos de la contabilidad para llevar un registro de tu negocio.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://img.freepik.com/vector-gratis/empresaria-idea-bombilla-monedas-billetes_24640-45048.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Ideas de publicidad para tu emprendimiento</h3>
                        <p>Te daremos ideas muy potentes y eficaces para hacer publicidad a tu negocio, y vender más.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://pbs.twimg.com/media/Dp96fPLX4AIjEtN.png" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Postula al programa de Mentorias de Comunidad Mujer</h3>
                        <p>Puedes obtener más información sobre el programa aquí.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://logical-investment.com/wp-content/uploads/2021/06/c673ae6d017d87a0662a2682b7d8d9d8-1-1024x551.png" />
                    </figure>
                    <div className="contenido-card">
                        <h3>La importancia del marketing para tu emprendimiento.</h3>
                        <p>Aquí te compartimos los conceptos claves para armar tu primera estrategia de marketing. Fácil y sencillo.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://img.freepik.com/vector-gratis/mujer-negocios-multitarea-dibujada-mano-plana_23-2148828083.jpg" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Administra y organiza tu negocio.</h3>
                        <p>Aquí obtendrás información, útil y práctica para administrar tu negocio.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://cdn.bicevida.cl/wp-content/uploads/2021/08/iStock-1152082027.webp" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Las finanzas una pieza clave para el éxito.</h3>
                        <p>Aquí aprenderás a aumentar las ganancias de tu emprendimiento.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
                <div className="card">
                    <figure>
                        <img src="https://backup.emprender-facil.com/wp-content/uploads/2021/05/cabecera-7-01.png" />
                    </figure>
                    <div className="contenido-card">
                        <h3>Mujer Emprende: ¿Cómo postular al programa que impulsa al emprendimiento femenino?</h3>
                        <p>Te guiamos en la postulación al programa.</p>
                        <a href="#">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

//aqui va trabajar karen 
const CardPartner = ({ partner }) => {
    return (
        <div>
            <div class="titlePage">
                <h2>Colaboradoras</h2>
            </div>
            <div className="body_partner">
                <div className="container_card_partner">
                    {partner.map(i => (
                        <div className="card_father_partner">
                            <div className="card_partner">
                                <div className="card_front_partner">
                                    <div className="_partner">
                                        <img src={i.imagen} />
                                    </div>
                                    <div className="body_card_front_partner bg_partner">
                                        <h1>{i.nombre} {i.apellido}</h1>
                                    </div>
                                </div>
                                <div className="card_back_partner">
                                    <div className="body_card_back_partner">
                                        <h1>{i.nombre} {i.apellido}</h1>
                                        <p className="p_card_back_partner">{i.descripcion}</p>
                                        <div className="back_extra_partner d-flex justify-content-between">
                                            <div>
                                                <ul>
                                                    <li>{i.interes1}</li>
                                                    <li>{i.interes2}</li>
                                                    <li>{i.interes3}</li>
                                                </ul>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <Link to="/"><AiOutlineMessage /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

//aqui va trabajar Felipe 
const CardEvents = () => {
    return (
        <div>
            <div class="titlePage">
                <h2>Proximos Eventos</h2>
            </div>
            <div class="events">
                <div class="cardEvents">
                    <div class="left-column background-left-column">
                        <h6>Eventos</h6>
                        <h4>Presencial</h4>
                        <img src="https://i.ibb.co/nwJX4Gj/2.png "></img>
                        <h3>Alisa Rivas </h3>
                    </div>
                    <div class="right-column">
                        <div class="dataEvents">
                            <h4>Av. Irarrázaval 4055, Ñuñoa</h4>
                            <h6>30/04/2023 10:00</h6>
                        </div>
                        <h2>Contabilidad básica</h2>
                        <p>Los números son importantes en tu negocio, te enseñare las operaciones basicas y el uso de programas gratuitos para que puedas tener tus numeros en orden</p>
                        <button class="buttonIns">Inscripción</button>
                    </div>
                </div>
                <div class="cardEvents">
                    <div class="left-column background-left-column-online">
                        <h6>Eventos</h6>
                        <h4>Online    </h4>
                        <img src="https://i.ibb.co/fS5C0nv/5.png"></img>
                        <h3>Javiera Gonzales </h3>
                    </div>
                    <div class="right-column">
                        <div class="dataEvents">
                            <h4>Via Zoom     </h4>
                            <h6>29/04/2023 11:00</h6>
                        </div>
                        <h2>Canva básico</h2>
                        <p>Las gráficas digitales son muy importantes para tu emprendimiento, en este taller aprenderás a usar canva una plataforma gratuita. </p>
                        <button class="buttonIns">Inscripción</button>
                    </div>
                </div>
                <div class="cardEvents">
                    <div class="left-column background-left-column-online">
                        <h6>Eventos</h6>
                        <h4>Online    </h4>
                        <img src="https://i.ibb.co/JQvx9Fd/7.png"></img>
                        <h3>Catalina Lin</h3>
                    </div>
                    <div class="right-column">
                        <div class="dataEvents">
                            <h4>Via Meet     </h4>
                            <h6>05/05/2023 09:00</h6>
                        </div>
                        <h2>Programa tu primer bot</h2>
                        <p>Aprende a crear tu propio bot para automatizar las respuestas de tus redes sociales. </p>
                        <button class="buttonIns">Inscripción</button>
                    </div>
                </div>
                <div class="cardEvents">
                    <div class="left-column background-left-column">
                        <h6>Eventos</h6>
                        <h4>Presencial</h4>
                        <img src="https://i.ibb.co/r4bRMYm/8.png"></img>
                        <h3>Antonia Yang</h3>
                    </div>
                    <div class="right-column">
                        <div class="dataEvents">
                            <h4>Av. Irarrázaval 4055, Ñuñoa</h4>
                            <h6>06/05/2023 11:00</h6>
                        </div>
                        <h2>Registra tu marca</h2>
                        <p>En este taller vas a aprender como poder registrar tu marca y los beneficios que conlleva este proceso</p>
                        <button class="buttonIns">Inscripción</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { CardNews, CardAbility, CardTool, CardPartner, CardEvents };