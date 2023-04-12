import React from "react"
import { Link } from "react-router-dom";


const Login = () => {
    return (
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Iniciar Sesión</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Registrarse</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label for="user" className="label">Nombre de Usuario</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Contraseña</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" />
                                <label for="check"><span className="icon"></span>Mantener sesión iniciada</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Iniciar Sesión" />
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <Link to="/login">¿Olvidaste la Contraseña?</Link>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label for="user" className="label">Nombre de Usuario</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Contraseña</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Repetir Contraseña</label>
                                <input id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Correo Electronico</label>
                                <input id="pass" type="text" className="input" />
                            </div>
                            <div className="hr"></div>
                            <div className="group">
                                <a href="#formulario"><input type="submit" className="button" value="Registrarse"/></a>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label for="tab-1">¿Ya estas registrado?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export { Login }