import React from "react"

const FormRegister = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center " id="formulario">
            <div className="container-fluid login-wrap">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5 mb-5">
                        <form className="row shadow-lg p-3" novalidate>
                            <div className="m-2">
                                <h1>Unos datos más y Serás Socia</h1>
                            </div>

                            <div className="col-md-12">
                                <div className="row">

                                    <div className="col">
                                        <label for="nombreInput" className="form-label">Nombre <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ingrese su nombre"
                                            id="nombreInput"
                                            required
                                        />
                                    </div>

                                    <div className="col">
                                        <label for="apellidoInput" className="form-label">Apellido <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ingrese su apellido"
                                            id="apellidoInput"
                                            required
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="row">

                                    <div className="col">
                                        <label for="rutInput" className="form-label">Rut <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="12345678-9"
                                            id="rutInput"
                                            required
                                        />
                                    </div>

                                    <div className="col">
                                        <label for="telefonoInput" className="form-label">Teléfono <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="912345678"
                                            id="telefonoInput"
                                            required
                                        />
                                    </div>

                                    <div className="col">
                                        <label for="redsocialInput" className="form-label">Red Social <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="@Usuario"
                                            id="redsocialInput"
                                            required
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mt-3">
                                    <h5 className="">¿Que temas o intereses te gustaria aprender o conocer? <span className="text-danger">*</span></h5>
                                </div>
                                <div className="row">

                                    <div className="col">
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
                                    <div className="col">
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
                                    <div className="col">
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
                            </div>
                            <div className="col-md-12">
                                <div className="mt-3">
                                    <h5 className="">¿Que Rol quieres tener dentro de nuestra aplicación web? <span className="text-danger">*</span></h5>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <select name="" id="" className="form-select" required >
                                            <option value="1">Colaboradora</option>
                                            <option value="2">Socia</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mt-3">
                                    <h5 className="">Queremos que te conozcan <span className="text-danger">*</span></h5>
                                </div>
                                <textarea
                                    className="form-control"
                                    name=""
                                    placeholder="Tu descripción "
                                    id=""
                                    cols="30"
                                    rows="10"
                                    required
                                ></textarea>
                            </div>

                            <div className="col-md-12">
                                <h5>Inserta tu foto de Perfil</h5>
                                <input type="file" name="foto" id="imagenInput" />
                            </div>

                            <div className="col-md-12 mt-2 buttonEnviar">
                                <button id="submitBtn" className="col-12 btn btn-secondary" type="submit">
                                    Enviar
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { FormRegister }